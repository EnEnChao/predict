document.getElementById('predict-form').addEventListener('submit', (event) => {
    event.preventDefault();
  
    // 获取表单中输入的数据
    const formData = {
      age: parseFloat(document.getElementById('age').value),
      gender: parseFloat(document.getElementById('gender').value),
      education: parseFloat(document.getElementById('education').value),
      taste: parseFloat(document.getElementById('taste').value),
      single: parseFloat(document.getElementById('single').value),
    };
  
    // 使用逻辑回归模型计算预测概率
    const probability = logisticRegression(formData);
  
    // 显示结果
    document.getElementById('result').innerText = `再購買機率为:${(probability * 100).toFixed(2)}%`;
  });
  
  function logisticRegression(formData) {
    // 将非标准化的回归系数和截距添加到这里
    const coefficients = {
      age: -0.2, // 示例系数
      gender: -0.3, // 示例系数
      education: -0.9, // 示例系数
      taste: 1.5, // 示例系数
      single: 2.0, // 示例系数
      intercept: 1.5, // 示例截距
    };
  
    // 计算逻辑回归模型的线性组合
    const linearCombination =
      formData.age * coefficients.age +
      formData.gender * coefficients.gender +
      formData.education * coefficients.education +
      formData.taste * coefficients.taste +
      formData.single * coefficients.single +
      coefficients.intercept;
  
    // 使用 Sigmoid 函数将线性组合转换为预测概率
    const probability = 1 / (1 + Math.exp(-linearCombination));
  
    return probability;
  }
  
  