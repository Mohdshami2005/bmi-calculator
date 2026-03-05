# bmi-calculator
A simple BMI (Body Mass Index) Calculator built using HTML, CSS, and JavaScript.
<br>
The application allows users to enter their height (in cm) and weight (in kg) and calculates their BMI instantly. It also highlights the BMI category (Underweight, Normal, or Overweight).
<h3>Features</h3>
<ul>
<li>Calculate BMI using height and weight</li>
<li>Input validation for incorrect values</li>
<li>Displays the calculated BMI</li>
<li>Highlights BMI category</li>
</ul>
<h3>How it works</h3>
<ol type="1">
<li>The user enters height (cm) and weight (kg).</li>
<li>When the Calculate button is clicked, the form submission is captured using a JavaScript event listener..</li>
<li>BMI is calculated using the formula : BMI = weight (kg) / height² (m²)</li>
<li>The result is displayed and the corresponding BMI category is highlighted.</li>
</ol>
<h2>BMI Categories</h2>
<table>
  <tr>
    <th>Category</th>
    <th>BMI Range</th>
  </tr>
  <tr>
    <td>Underweight</td>
    <td>Less than 18.6</td>
  </tr>
  <tr>
    <td>Normal</td>
    <td>18.6 – 24.9</td>
  </tr>
  <tr>
    <td>Overweight</td>
    <td>Greater than 24.9</td>
  </tr>
</table>
#live demo - https://mohdshami2005.github.io/bmi-calculator/