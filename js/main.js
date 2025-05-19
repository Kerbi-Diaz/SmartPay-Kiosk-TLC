document.addEventListener("DOMContentLoaded", () => {
    // Update current date and time
    function updateDateTime() {
      const now = new Date()
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }
      const dateTimeString = now.toLocaleDateString("en-US", options)
      document.getElementById("current-date-time").textContent = dateTimeString
    }
  
    updateDateTime()
    setInterval(updateDateTime, 60000) // Update every minute
  
    // Screen navigation variables
    const screens = {
      welcome: document.getElementById("welcome-screen"),
      manualEntry: document.getElementById("manual-entry-screen"),
      studentInfo: document.getElementById("student-info-screen"),
      payment: document.getElementById("payment-screen"),
      processing: document.getElementById("processing-screen"),
      success: document.getElementById("success-screen"),
    }
  
    // Admin modal variables
    const adminModal = document.getElementById("admin-modal")
    const adminBtn = document.getElementById("admin-btn")
    const closeAdminModal = document.getElementById("close-admin-modal")
    const adminLoginBtn = document.getElementById("admin-login-btn")
  
    // Show only the specified screen, hide others
    function showScreen(screenName) {
      Object.keys(screens).forEach((key) => {
        screens[key].classList.add("hidden")
      })
      screens[screenName].classList.remove("hidden")
    }
  
   
    // Manual entry button
    document.getElementById("manual-entry-btn").addEventListener("click", () => {
      showScreen("manualEntry")
    })
  
    // Manual entry back button
    document.getElementById("manual-back-btn").addEventListener("click", () => {
      showScreen("welcome")
    })
  
    // Manual entry submit button
    document.getElementById("manual-submit-btn").addEventListener("click", () => {
      const studentId = document.getElementById("student-id-input").value
      if (studentId.trim() === "") {
        alert("Please enter a valid Student ID")
        return
      }
  
      // In a real implementation, this would fetch student data from a database
      // For demo purposes, we'll use hardcoded student data
      loadStudentData({
        id: studentId,
        name: "Jane Smith",
        course: "Bachelor of Science in Business Administration",
        year: "3rd Year",
        email: "jane.smith@student.tlc.edu.ph",
        photo: "/placeholder.svg?height=80&width=80",
      })
  
      showScreen("studentInfo")
    })
  
    // Student info back button
    document.getElementById("info-back-btn").addEventListener("click", () => {
      showScreen("welcome")
    })
  
    // Student info continue button
    document.getElementById("info-continue-btn").addEventListener("click", () => {
      showScreen("payment")
  
      // Update the payment button text with the total amount
      const totalAmount = document.getElementById("total-amount").textContent
      document.getElementById("payment-proceed-btn").textContent = `Proceed to Pay ${totalAmount}`
    })
  
    // Payment back button
    document.getElementById("payment-back-btn").addEventListener("click", () => {
      showScreen("studentInfo")
    })
  
    // Payment proceed button
    document.getElementById("payment-proceed-btn").addEventListener("click", () => {
      showScreen("processing")
  
      // Simulate payment processing
      setTimeout(() => {
        // Generate transaction ID
        const transactionId =
          "TLC-" +
          Math.floor(Math.random() * 10000)
            .toString()
            .padStart(5, "0")
  
        // Get current date and time for receipt
        const now = new Date()
        const options = {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }
        const dateTimeString = now.toLocaleDateString("en-US", options)
  
        // Get selected payment method
        const paymentMethod = document.querySelector('input[name="payment-method"]:checked').value
        const paymentMethodText =
          paymentMethod === "gcash" ? "GCash" : paymentMethod === "card" ? "Credit/Debit Card" : "Online Banking"
  
        // Update receipt details
        document.getElementById("receipt-transaction-id").textContent = transactionId
        document.getElementById("receipt-date-time").textContent = dateTimeString
        document.getElementById("receipt-amount").textContent = document.getElementById("total-amount").textContent
        document.getElementById("receipt-method").textContent = paymentMethodText
  
        showScreen("success")
      }, 3000) // 3 seconds delay to simulate processing
    })
  
    // Print receipt button
    document.getElementById("print-receipt-btn").addEventListener("click", () => {
      alert("Printing receipt...")
      // In a real implementation, this would trigger the receipt printer
    })
  
    // Email receipt button
    document.getElementById("email-receipt-btn").addEventListener("click", () => {
      const email = document.getElementById("receipt-email").value
      alert(`Receipt sent to ${email}`)
      // In a real implementation, this would send an email with the receipt
    })
  
    // New transaction button
    document.getElementById("new-transaction-btn").addEventListener("click", () => {
      showScreen("welcome")
    })
  
    // Admin modal functions
    adminBtn.addEventListener("click", () => {
      adminModal.classList.remove("hidden")
    })
  
    closeAdminModal.addEventListener("click", () => {
      adminModal.classList.add("hidden")
    })
  
    adminLoginBtn.addEventListener("click", () => {
      const username = document.getElementById("admin-username").value
      const password = document.getElementById("admin-password").value
  
      if (username === "admin@gmail.com" && password === "password") {
        // In a real implementation, this would use secure authentication
        window.location.href = "admin.html"
      } else {
        alert("Invalid credentials. Please try again.")
      }
    })
  
    // Helper function to load student data into the UI
    function loadStudentData(student) {
      document.getElementById("student-name").textContent = student.name
      document.getElementById("student-id").textContent = "ID: " + student.id
      document.getElementById("student-course").textContent = student.course
      document.getElementById("student-year").textContent = student.year
      document.getElementById("student-email").textContent = student.email
      document.getElementById("student-photo").src = student.photo
  
      // Also update the email field in the payment screen
      document.getElementById("receipt-email").value = student.email
    }
  })
  document.addEventListener("DOMContentLoaded", () => {
    // Update current date and time
    function updateDateTime() {
      const now = new Date()
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }
      const dateTimeString = now.toLocaleDateString("en-US", options)
      document.getElementById("current-date-time").textContent = dateTimeString
    }
  
    updateDateTime()
    setInterval(updateDateTime, 60000) // Update every minute
  
    // Screen navigation variables
    const screens = {
      welcome: document.getElementById("welcome-screen"),
      manualEntry: document.getElementById("manual-entry-screen"),
      studentInfo: document.getElementById("student-info-screen"),
      payment: document.getElementById("payment-screen"),
      processing: document.getElementById("processing-screen"),
      success: document.getElementById("success-screen"),
    }
  
    // Admin modal variables
    const adminModal = document.getElementById("admin-modal")
    const adminBtn = document.getElementById("admin-btn")
    const closeAdminModal = document.getElementById("close-admin-modal")
    const adminLoginBtn = document.getElementById("admin-login-btn")
  
    // Show only the specified screen, hide others
    function showScreen(screenName) {
      Object.keys(screens).forEach((key) => {
        screens[key].classList.add("hidden")
      })
      screens[screenName].classList.remove("hidden")
    }
  
    // Manual entry button
    document.getElementById("manual-entry-btn").addEventListener("click", () => {
      showScreen("manualEntry")
    })
  
    // Manual entry back button
    document.getElementById("manual-back-btn").addEventListener("click", () => {
      showScreen("welcome")
    })
  
    // Manual entry submit button
    document.getElementById("manual-submit-btn").addEventListener("click", () => {
      const studentId = document.getElementById("student-id-input").value
      if (studentId.trim() === "") {
        alert("Please enter a valid Student ID")
        return
      }
  
      // In a real implementation, this would fetch student data from a database
      // For demo purposes, we'll use hardcoded student data
      loadStudentData({
        id: studentId,
        name: "Jane Smith",
        course: "Bachelor of Science in Business Administration",
        year: "3rd Year",
        email: "jane.smith@student.tlc.edu.ph",
        photo: "/placeholder.svg?height=80&width=80",
      })
  
      showScreen("studentInfo")
    })
  
    // Student info back button
    document.getElementById("info-back-btn").addEventListener("click", () => {
      showScreen("welcome")
    })
  
    // Student info continue button
    document.getElementById("info-continue-btn").addEventListener("click", () => {
      showScreen("payment")
  
      // Update the payment button text with the total amount
      const totalAmount = document.getElementById("total-amount").textContent
      document.getElementById("payment-proceed-btn").textContent = `Proceed to Pay ${totalAmount}`
    })
  
    // Payment back button
    document.getElementById("payment-back-btn").addEventListener("click", () => {
      showScreen("studentInfo")
    })
  
    // Payment proceed button
    document.getElementById("payment-proceed-btn").addEventListener("click", () => {
      showScreen("processing")
  
      // Simulate payment processing
      setTimeout(() => {
        // Generate transaction ID
        const transactionId =
          "TLC-" +
          Math.floor(Math.random() * 10000)
            .toString()
            .padStart(5, "0")
  
        // Get current date and time for receipt
        const now = new Date()
        const options = {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }
        const dateTimeString = now.toLocaleDateString("en-US", options)
  
        // Get selected payment method
        const paymentMethod = document.querySelector('input[name="payment-method"]:checked').value
        const paymentMethodText =
          paymentMethod === "gcash" ? "GCash" : paymentMethod === "card" ? "Credit/Debit Card" : "Online Banking"
  
        // Update receipt details
        document.getElementById("receipt-transaction-id").textContent = transactionId
        document.getElementById("receipt-date-time").textContent = dateTimeString
        document.getElementById("receipt-amount").textContent = document.getElementById("total-amount").textContent
        document.getElementById("receipt-method").textContent = paymentMethodText
  
        showScreen("success")
      }, 3000) // 3 seconds delay to simulate processing
    })
  
    // Print receipt button
    document.getElementById("print-receipt-btn").addEventListener("click", () => {
      alert("Printing receipt...")
      // In a real implementation, this would trigger the receipt printer
    })
  
    // Email receipt button
    document.getElementById("email-receipt-btn").addEventListener("click", () => {
      const email = document.getElementById("receipt-email").value
      alert(`Receipt sent to ${email}`)
      // In a real implementation, this would send an email with the receipt
    })
  
    // New transaction button
    document.getElementById("new-transaction-btn").addEventListener("click", () => {
      showScreen("welcome")
    })
  
    // Admin modal functions
    adminBtn.addEventListener("click", () => {
      adminModal.classList.remove("hidden")
    })
  
    closeAdminModal.addEventListener("click", () => {
      adminModal.classList.add("hidden")
    })
  
    adminLoginBtn.addEventListener("click", () => {
      const username = document.getElementById("admin-username").value
      const password = document.getElementById("admin-password").value
  
      if (username === "admin" && password === "password") {
        // In a real implementation, this would use secure authentication
        window.location.href = "admin.html"
      } else {
        alert("Invalid credentials. Please try again.")
      }
    })
  
    // Helper function to load student data into the UI
    function loadStudentData(student) {
      document.getElementById("student-name").textContent = student.name
      document.getElementById("student-id").textContent = "ID: " + student.id
      document.getElementById("student-course").textContent = student.course
      document.getElementById("student-year").textContent = student.year
      document.getElementById("student-email").textContent = student.email
      document.getElementById("student-photo").src = student.photo
  
      // Also update the email field in the payment screen
      document.getElementById("receipt-email").value = student.email
    }
  })


