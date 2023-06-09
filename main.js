document.getElementById('predict-form').addEventListener('submit', (event) => {
    event.preventDefault();
  
    // 获取表单中输入的数据
    const formData = {
      age: parseFloat(document.getElementById('age').value),
      gender: parseFloat(document.getElementById('gender').value),
      education: parseFloat(document.getElementById('education').value),
      single: parseFloat(document.getElementById('single').value),
    };
  
    // 使用逻辑回归模型计算预测概率
    const probability = logisticRegression(formData);
  
    // 显示结果
    document.getElementById('result').innerText = `購買機率为:${(probability * 100).toFixed(2)}%`;
  });
  
  function logisticRegression(formData) {
    // 将非标准化的回归系数和截距添加到这里
    const coefficients = {
      age: -0.2, 
      gender: -0.3, 
      education: -0.9, 
      single: 1.5, 
      intercept: 0.1, 
    };
  
    // 计算逻辑回归模型的线性组合
    const linearCombination =
      formData.age * coefficients.age +
      formData.gender * coefficients.gender +
      formData.education * coefficients.education +
      formData.single * coefficients.single +
      coefficients.intercept;
  
    // 使用 Sigmoid 函数将线性组合转换为预测概率
    const probability = 1 / (1 + Math.exp(-linearCombination));
  
    return probability;
  }
  
  
