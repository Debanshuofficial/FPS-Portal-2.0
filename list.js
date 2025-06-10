//Only Update the values in the below section.
var acount = 4;
var bcount = 5;

const students = [
    //Category A
    {
        id: 0,
        name: "Ananya Dutta",
        class: "VI-Greenwood",
        admissionDate: "09-MAR-2025",
        fees: [
            { month: "March", status: "Paid", paymentDate: "11-APR-2025", notes: "Completed" },
            { month: "April", status: "Pending", paymentDate: "", notes: "" }
        ]
    },
    //Category B
    {
        id: 1,
        name: "Sayan Mitra",
        class: "V-Loreto",
        admissionDate: "03-AUG-2024",
        fees: [
            { month: "January", status: "Paid", paymentDate: "01-FEB-2025", notes: "Paid in full" },
            { month: "February", status: "Paid", paymentDate: "08-MAR-2025", notes: "PAID" },
            { month: "March", status: "Paid", paymentDate: "01-APR-2025", notes: "" },
            { month: "April", status: "Pending", paymentDate: "", notes: "" }
            // ... remaining months
        ]
    },
    {
        id: 2,
        name: "Ishani Sen",
        class: "VIII-LMHS",
        admissionDate: "02-AUG-2024",
        fees: [
            { month: "January", status: "Paid", paymentDate: "08-FEB-2025", notes: "Paid in full" },
            { month: "February", status: "Skipped", paymentDate: "", notes: "New Session" },
            { month: "March", status: "Skipped", paymentDate: "", notes: "Started on 03-APR-2025" },
            { month: "April", status: "Pending", paymentDate: "", notes: "" }
            // ... remaining months
        ]
    },
    //Category B
    {
        id: 3,
        name: "Trisha Ghosh",
        class: "VIII-LMHS",
        admissionDate: "12-MAR-2025",
        fees: [
            { month: "March", status: "Paid", paymentDate: "02-APR-2025", notes: "Paid" },
            { month: "April", status: "Pending", paymentDate: "", notes: "" }
            // ... remaining months
        ]
    },
    //Category A
    {
        id: 4,
        name: "Pratyush Nandy",
        class: "IX-LMHS",
        admissionDate: "01-APR-2024",
        fees: [
            { month: "January", status: "Paid", paymentDate: "01-FEB-2025", notes: "Paid -800" },
            { month: "February", status: "Paid", paymentDate: "05-MAR-2025", notes: "Paid +800" },
            { month: "March", status: "Paid", paymentDate: "03-APR-2025", notes: "" },
            { month: "April", status: "Pending", paymentDate: "", notes: "" }
            // ... remaining months
        ]
    }
];

 
//bcount id=2, 6 in 2024
var a = 1800;
var b = 1500;
//Source https://fpsportal.anvil.app/
var c = 10300;

// Calculation Reference.
var m1 = (a*9)+(a*acount) + (b*10)+(b*bcount) + 1000 + c;
var m2 = 7900;
var m3 = m1 + m2;
