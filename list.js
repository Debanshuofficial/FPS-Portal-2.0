const students = [
    {
        id: 0,
        name: "Rupon Biswas",
        class: "V-Academy",
        admissionDate: "09-MAR-2025",
        fees: [
            { month: "March", status: "Paid", paymentDate: "11-APR-2025", notes: "" },
            { month: "April", status: "Pending", paymentDate: "", notes: "" }
        ]
    },
    {
        id: 1,
        name: "Rudranee Biswas",
        class: "V-Don-Bosco",
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
        name: "Oishi Pal Choudhury",
        class: "VIII-BMS",
        admissionDate: "02-AUG-2024",
        fees: [
            { month: "January", status: "Paid", paymentDate: "08-FEB-2025", notes: "Paid in full" },
            { month: "February", status: "Skipped", paymentDate: "", notes: "New Session" },
            { month: "March", status: "Skipped", paymentDate: "", notes: "Started on 03-APR-2025" },
            { month: "April", status: "Pending", paymentDate: "", notes: "" }
            // ... remaining months
        ]
    },
    {
        id: 3,
        name: "Debosmita Biswas",
        class: "VIII-BMS",
        admissionDate: "212-MAR-2025",
        fees: [
            { month: "March", status: "Paid", paymentDate: "02-APR-2025", notes: "Paid" },
            { month: "April", status: "Pending", paymentDate: "", notes: "" }
            // ... remaining months
        ]
    },
    {
        id: 4,
        name: "Adrikarni Biswas",
        class: "IX-BMS",
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