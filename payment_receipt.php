<?php
// Static data
$name = "John Doe";
$studentID = "202312345";
$transactionID = "TLC-20230001";
$itemName = "Intramurals T-shirt";
$paymentAmount = "450.00";
$paymentMethod = "GCash";
$paymentFor = $itemName;
$paymentDate = date("F j, Y"); 

// Create receipt string
$receipt = "
================================
        PAYMENT RECEIPT       
        TLC Bookstore         
================================
Transaction ID: $transactionID
Name: $name
Student ID: $studentID
Date & Time: $paymentDate
--------------------------------
Payment Method: $paymentMethod
Payment For: $paymentFor

================================
ITEM NAME           QTY   PRICE
--------------------------------
" . str_pad($itemName, 20) . str_pad(1, 6) . str_pad($paymentAmount, 10) . "
--------------------------------
Total: $paymentAmount
================================
An automated receipt will be sent to your email.
================================
";

// Output the receipt with line breaks
echo nl2br($receipt);

// Print in background
$printerName = "POS58 Printer";
$filePath = sys_get_temp_dir() . "\\print_receipt.txt";
file_put_contents($filePath, $receipt);

// Execute print command without waiting
if (strtoupper(substr(PHP_OS, 0, 3)) === 'WIN') {
    // Windows
    pclose(popen("start /B copy /B \"$filePath\" \"\\\\localhost\\$printerName\"", "r"));
} else {
    // Linux/Unix
    exec("lp -d $printerName $filePath > /dev/null &");
}

// Immediately redirect
header("Location: payment-success.html");
exit();
?>
