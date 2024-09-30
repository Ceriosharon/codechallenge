function calculatePAYE(grossSalary) {
    if (grossSalary <= 75000) {
        return grossSalary * 0.1;  
    } else if (grossSalary <= 85000) {
        return grossSalary * 0.25; 
    } else {
        return grossSalary * 0.3;  
    }
}

function calculateNHIF(grossSalary) {
    if (grossSalary <= 45800) {
        return 290;
    } else if (grossSalary <= 60000) {
        return 350;
    }
    return 400; 
}

function calculateNSSF(grossSalary) {
    return grossSalary * 0.06;
}

function netSalaryCalculator(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    
    const paye = calculatePAYE(grossSalary);
    const nhif = calculateNHIF(grossSalary);
    const nssf = calculateNSSF(grossSalary);

    const totalDeductions = paye + nhif + nssf;
    const netSalary = grossSalary - totalDeductions;

    return {
        grossSalary: grossSalary,
        totalDeductions: totalDeductions,
        netSalary: netSalary
    };
}

let basicSalary = parseFloat("45000");
let benefits = parseFloat("20500");

let salaryDetails = netSalaryCalculator(basicSalary, benefits);

console.log(`Gross Salary: ${salaryDetails.grossSalary}`);
console.log(`Total Deductions: ${salaryDetails.totalDeductions}`);
console.log(`Net Salary: ${salaryDetails.netSalary}`);
