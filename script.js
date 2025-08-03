let storedUsername = "Kaswa";
let storedPassword = "76092";

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === storedUsername && password === storedPassword) {
        document.querySelector(".login-container").classList.add("hidden");
        document.getElementById("dashboard").classList.remove("hidden");
    } else {
        alert("Invalid username or password!");
    }
}

function logout() {
    document.querySelector(".login-container").classList.remove("hidden");
    document.getElementById("dashboard").classList.add("hidden");
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}

function toggleChangePassword() {
    document.getElementById("change-password-box").classList.toggle("hidden");
}

function updatePassword() {
    let currentPassword = document.getElementById("current-password").value;
    let newPassword = document.getElementById("new-password").value;
    let confirmPassword = document.getElementById("confirm-password").value;

    if (currentPassword !== storedPassword) {
        alert("Current password is incorrect!");
        return;
    }

    if (newPassword === confirmPassword && newPassword.length > 0) {
        storedPassword = newPassword;
        alert("Your password has been successfully updated!");
        document.getElementById("change-password-box").classList.add("hidden");
        document.getElementById("current-password").value = "";
        document.getElementById("new-password").value = "";
        document.getElementById("confirm-password").value = "";
    } else {
        alert("Passwords do not match or are empty!");
    }
}

function showSelectedForm() {
    const formType = document.getElementById("form-select").value;
    if (formType) {
        showForm(formType);
    } else {    
        alert("Please select a form first!");
    }
}

function showForm(formType) {
    let formContent = "";

    if (formType === 'agreement investment') {
        formContent = `
            <h2>Kaswa Marketing & Business Developers(Pvt.)Ltd.</h2>
            <h3>Monthly Investment Agreement</h3>
            <p>I <input type="text" id="your-name" placeholder="Your Name"> son/daughter/spouse of 
            <input type="text" id="guardian-name" placeholder="Guardian Name"> holder of National Identity Card No 
            <input type="text" id="cnic-number" placeholder="CNIC Number"> and resident of 
            <input type="text" id="your-address" placeholder="Your Address"> hereby enter into a partnership agreement with Kaswa Marketing and Business Developers,including its subsidiaries , kaswa motors and property.
            </p>

            <p>I have invested an amount of <input type="text" id="investment-amount" placeholder="Investment Amount"> per month for the period of  <input type="text" id="investment-Duration" placeholder="investment Duration">
            in the investment plan <input type="text" id="investment-type" placeholder="Investment Type"> offered by Kaswa Marketing and Business Developers. 
            The duration of this agreement is <input type="text" id="agreement-duration" placeholder="Agreement Duration">.</p>

            <p>As per the terms of this agreement, Kaswa Marketing and Business Developers commits to providing me with monthly profit payments based on my partnership share.</p>

            <p>The current profit rate is <input type="text" id="profit-rate" placeholder="Profit Rate">, though it is subject to fluctuations based on market conditions.I acknowledge and accept that returns may vary, and I agree to adhere to the stipulated terms in both profit and loss scenarios. 
            This investment is made purely for business purposes, with an understanding of the associated risks.</p>

            <h4>Signatures</h4>
            <p>Investor: Signature: ______________ Name: <input type="text" id="investor-name" placeholder="Investor Name"></p>
            <p>Group Manager: Signature: ______________ Name: <input type="text" id="manager-name" placeholder="Manager Name"></p>
            <p>Group Head: Signature: ______________ Name: <input type="text" id="group-head-name" placeholder="Group Head Name"></p>

            <div class="form-actions">
                <button onclick="submitForm('agreement investment')">Submit</button>
            </div>
            
            <div class="form-image-placeholder" id="image-placeholder" style="height: 120px;">Image Placeholder</div>
            <div class="form-fingerprint-placeholder" id="fingerprint-placeholder">Fingerprint Placeholder</div>
        `;
    } else if (formType === 'investment') {
        formContent = `
            <h2>Kaswa Marketing & Business Developers(Pvt.)Ltd.</h2>
            <h3>Investment Application Form</h3>

            <p>Registration NO: <input type="text" id="registration-number" placeholder="Registration Number"></p>
            <p>Name of Plan: <input type="text" id="plan-name" placeholder="Plan Name"></p>
            <p>Duration of Plan: <input type="text" id="plan-duration" placeholder="Plan Duration"></p>
            <p>Installment: <input type="text" id="installment-amount" placeholder="Installment Amount"></p>
            <p>Name of Investor: <input type="text" id="investor-name" placeholder="Investor Name"></p>
            <p>Personal No: <input type="text" id="personal-number" placeholder="Personal Number"></p>
            <p>Identity Card No: <input type="text" id="cnic" placeholder="CNIC"></p>
            <p>Parenthood / Marriage: <input type="text" id="parent-spouse-name" placeholder="Parent/Spouse Name"></p>
            <p>Name of Factory: <input type="text" id="factory-name" placeholder="Factory Name"></p>
            <p>Job Description: <input type="text" id="job-description" placeholder="Job Description"></p>
            <p>Business Description (Private): <input type="text" id="business-description" placeholder="Business Description"></p>
            <p>Complete Address: <input type="text" id="address" placeholder="Address"></p>
            <p>Heirs Name: <input type="text" id="heir-name" placeholder="Heir Name"></p>
            <p>Heirs parenthood/marriage: <input type="text" id="heir-relation" placeholder="Heir S/N, D/N"></p>
            <p>Heirs Identity Card No: <input type="text" id="heir-cnic" placeholder="Heir CNIC"></p>

            <h4>Terms & Conditions</h4>
            <ul>
                <li>Timely payment of installments is required under the committee plan.</li>
                <li>If an installment is missed during the agreement period, the profit for that month will be withheld.</li>
                <li>In case of early contract termination, the deposited amount will be refunded after the agreed term is completed.</li>
            </ul>

            <h4>Declaration</h4>
            <p>I confirm that I have carefully read and understood all the terms and conditions mentioned above. I will strictly follow the company's policies and procedures. In case of any legal issues, I will be personally responsible, and the company will not be held accountable in any way. I also give permission for my investment to be used only for business purposes, where there may be both profit and loss.</p>

            <p>Mobile Number: <input type="text" id="mobile-number" placeholder="Mobile Number"></p>
            <p>Signature: <input type="text" id="signature" placeholder="Signature"></p>
            <p>Bank Account Details (JazzCash, U Paisa): <input type="text" id="bank-account" placeholder="Bank Account"></p>

            <div class="form-actions">
                <button onclick="submitForm('investment')">Submit</button>
            </div>
            
            <div class="form-image-placeholder" id="image-placeholder" style="height: 120px;">Image Placeholder</div>
            <div class="form-fingerprint-placeholder" id="fingerprint-placeholder">Fingerprint Placeholder</div>
        `;
    } else if (formType === 'amount') {
        formContent = `
        <h2>Kaswa Marketing & Business Developers(Pvt.)Ltd.</h2>
            <h2>Amount Investment Form</h2>
            <p>Registration NO: <input type="text" id="registration-number" placeholder="Registration Number"></p>
            <p>Name of Plan: <input type="text" id="plan-name" placeholder="Plan Name"></p>
            <p>Duration of Plan: <input type="text" id="plan-duration" placeholder="Plan Duration"></p>
            <p>Amount: <input type="text" id="amount" placeholder="Amount"></p>
            <p>Name of Investor: <input type="text" id="investor-name" placeholder="Investor Name"></p>
            <p>Personal No: <input type="text" id="personal-number" placeholder="Personal Number"></p>
            <p>Heirs Name: <input type="text" id="heir-name" placeholder="Heir Name"></p>
            <p>Identity Card No: <input type="text" id="cnic" placeholder="CNIC"></p>
            <p>Parenthood/Marriage: <input type="text" id="parent-spouse-name" placeholder="Parent/Spouse Name"></p>
            <p>Name of Factory: <input type="text" id="factory-name" placeholder="Factory Name"></p>
            <p>Job Description: <input type="text" id="job-description" placeholder="Job Description"></p>
            <p>Business Description: <input type="text" id="business-description" placeholder="Business Description"></p>
            <p>Complete Address: <input type="text" id="address" placeholder="Address"></p>
            

            <h4>Terms & Conditions</h4>
            <ul>
            <li>Investors must commit to the All Together Investment Plan for a minimum of 2 years.</li>
            <li>Monthly deductions may vary and are not fixed.</li>
            <li>Profits will be paid at the end of each month following the agreement date.</li>
            <li>If you end the contract early, any money you took in advance from the company will be deducted before the remaining amount is refunded</li>
            <li>A 90-day notice is required before requesting early contract termination.</li>
             </ul>

            <h4>Declaration</h4>
            <p>I confirm that I have carefully read and understood all the terms and conditions mentioned above. 
            I will strictly follow the company's policies and procedures. In case of any legal issues, I will be personally responsible, and the company will not be held accountable in any way.I also give permission for my investment to be used only for business purposes, where there may be both profit and loss.</p>

            <p>Mobile Number: <input type="text" id="mobile-number" placeholder="Mobile Number"></p>
            <p>Signature: <input type="text" id="signature" placeholder="Signature"></p>
            <p>Bank Account Details: <input type="text" id="bank-account" placeholder="Bank Account"></p>

            <div class="form-actions">
                <button onclick="submitForm('amount')">Submit</button>
            </div>
            
            <div class="form-image-placeholder" id="image-placeholder" style="height: 120px;">Image Placeholder</div>
            <div class="form-fingerprint-placeholder" id="fingerprint-placeholder">Fingerprint Placeholder</div>
        `;


    } else if (formType === 'agreement amount') {
        formContent = `
            <h2>Kaswa Marketing & Business Developers(Pvt.)Ltd.</h2>
            <h3>Lump Sum Investment Agreement</h3>
            <p>I <input type="text" id="your-name" placeholder="Your Name"> son/daughter/spouse of 
            <input type="text" id="guardian-name" placeholder="Guardian Name"> holder of National Identity Card No 
            <input type="text" id="cnic-number" placeholder="CNIC Number"> and resident of 
            <input type="text" id="your-address" placeholder="Your Address"> hereby enter into a partnership agreement with Kaswa Marketing and Business Developers
            ,including its subsidiaries kaswa motors and property.</p>

            <p>I have invested an amount of <input type="text" id="investment-amount" placeholder="Investment Amount"> in the 
            <input type="text" id="investment-type" placeholder="Investment Type"> offered by Kaswa Marketing and Business Developers. 
            The duration of this agreement is <input type="text" id="agreement-duration" placeholder="Agreement Duration">.</p>

            <p>As per the terms of this agreement, Kaswa Marketing and Business Developers commits to providing me with monthly profit payments based on my partnership share.</p>

            <p>The current profit rate is <input type="text" id="profit-rate" placeholder="Profit Rate">, though it is subject to fluctuations based on market conditions.I acknowledge and accept that returns may vary, and I agree to adhere to the stipulated terms in both profit and loss scenarios. This investment is made purely for business purposes, with an understanding of the associated risks.</p>

            <h4>Signatures</h4>
            <p>Investor: Signature: ______________ Name: <input type="text" id="investor-name" placeholder="Investor Name"></p>
            <p>Group Manager: Signature: ______________ Name: <input type="text" id="manager-name" placeholder="Manager Name"></p>
            <p>Group Head: Signature: ______________ Name: <input type="text" id="group-head-name" placeholder="Group Head Name"></p>

            <div class="form-actions">
                <button onclick="submitForm('agreement amount')">Submit</button>
            </div>
            
            <div class="form-image-placeholder" id="image-placeholder" style="height: 120px;">Image Placeholder</div>
            <div class="form-fingerprint-placeholder" id="fingerprint-placeholder">Fingerprint Placeholder</div>
        `;
    } else if (formType === 'Payment Receipt') {
        formContent = `
            <div style="text-align: center; font-family: Arial, sans-serif;">
                <h1 style="margin-bottom: 5px;">KASWA MARKETING NETWORK(Pvt.)Ltd.</h1>
                <h2 style="margin-top: 5px; margin-bottom: 5px;">KASWA MOTORS AND PROPERTY</h2>
                <p style="margin: 5px 0;">Office number LG - 2, Gulshan e Anwar Plaza, Gulshan Anwar, Wah Cantt.</p>
                <p style="margin: 5px 0 20px 0;">051-459-6140</p>
                
                <h3 style="text-decoration: underline; margin-bottom: 20px;">PAYMENT RECEIPT</h3>
                
                <div style="text-align: left; margin-left: 20px;">
                    <p>REGISTRATION NO: <input type="text" id="registration-number" placeholder="ABC-1007" style="width: 100px;">
                    
                    <p>NAME: <input type="text" id="your-name" placeholder="Client Name" style="width: 200px;">
                    CELL NO: <input type="text" id="contact-number" placeholder="Cell NO" style="width: 150px;"></p>
                    
                    <p>S/O,D/O,W/O: <input type="text" id="parent-spouse" placeholder="F/N , S/N" style="width: 250px;"></p>
                    
                    <p>ADDRESS: <input type="text" id="address" placeholder="Permanent Address" style="width: 350px;"></p>
                    
                    <p>AMOUNT IN FIGURE: <input type="text" id="amount-figure" placeholder="3,00,000/-" style="width: 150px;"> RUPEES ONLY</p>
                    
                    <p>AMOUNT IN WORDS: <input type="text" id="amount-words" placeholder="THREE LAC RUPEES ONLY" style="width: 400px;"></p>
                    
                    <p>CHQ NO: <input type="text" id="cheque-number" style="width: 150px;"></p>
                    
                    <p style="margin-top: 30px;">RECEIVING AUTHORITY: _____________________</p>
                    
                    <p style="margin-top: 20px;">Date: <input type="date" id="receipt-date" style="width: 150px;"></p>
                </div>
                
                <button onclick="submitForm('Payment Receipt')" style="margin-top: 20px; padding: 10px 20px; background-color: #4CAF50; color: white; border: none; border-radius: 4px; cursor: pointer;">Generate Receipt</button>
            </div>
        `;
    }
    
    document.getElementById("form-container").innerHTML = formContent;
    document.getElementById("form-container").classList.remove("hidden");
    document.getElementById("dashboard-header").classList.add("hidden");
}

function showDashboard() {
    document.getElementById("dashboard-header").classList.remove("hidden");
    document.getElementById("form-container").classList.add("hidden");
}

function submitForm(formType) {
    let formData = {};
    let inputs = document.querySelectorAll("#form-container input");

    inputs.forEach(input => {
        formData[input.id] = input.value;
    });

    // Add image data if available (except for Payment Receipt)
    if (formType !== 'Payment Receipt') {
        const imagePlaceholder = document.getElementById("image-placeholder");
        if (imagePlaceholder && imagePlaceholder.querySelector("img")) {
            formData['clientImage'] = imagePlaceholder.querySelector("img").src;
        }

        // Add fingerprint data if available (except for Payment Receipt)
        const fingerprintPlaceholder = document.getElementById("fingerprint-placeholder");
        if (fingerprintPlaceholder && fingerprintPlaceholder.querySelector("img")) {
            formData['clientFingerprint'] = fingerprintPlaceholder.querySelector("img").src;
        }
    }

    console.log("Form Data:", formData);
    generatePDF(formData, formType);
    generateDOCX(formData, formType);

    alert(`${formType} form submitted successfully!`);
    showDashboard();
}

function generatePDF(formData, formType) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    const pageWidth = doc.internal.pageSize.width;
    const pageHeight = doc.internal.pageSize.height;
    
    // Add watermark
    doc.setGState(new doc.GState({opacity: 0.1}));
    doc.addImage('Logo1.png', 'PNG', pageWidth/2 - 50, pageHeight/2 - 50, 100, 100);
    doc.setGState(new doc.GState({opacity: 1}));

    // Add logo
    doc.addImage('Logo1.png', 'PNG', 10, 10, 25, 25);
    
    // Set colors
    const primaryColor = [42, 82, 152]; // Dark blue
    const secondaryColor = [203, 170, 5]; // Gold
    
    // Add header
    doc.setFontSize(18);
    doc.setTextColor(...primaryColor);
    doc.setFont("helvetica", "bold");
    
    let title = "";
    if (formType === 'agreement investment') {
        title = "Monthly Investment Agreement";
    } else if (formType === 'investment') {
        title = "Investment Application Form";
    } else if (formType === 'amount') {
        title = "Amount Investment Form";
    } else if (formType === 'agreement amount') {
        title = "Lump Sum Investment Agreement";
    } else if (formType === 'Payment Receipt') {
        title = "Payment Receipt";
    }
    
    doc.text("Kaswa Marketing & Business Developers(Pvt.)Ltd.", pageWidth/2, 22, { align: 'center' });
    doc.text(title, pageWidth/2, 32, { align: 'center' });
    
    // Add divider line
    doc.setDrawColor(...secondaryColor);
    doc.setLineWidth(1);
    doc.line(20, 42, pageWidth - 20, 42);
    
    // Set default text style
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.setFont("helvetica", "normal");
    
    let y = 50; // Starting y position
    
    if (formType === 'agreement investment') {
        doc.setFontSize(12);
        doc.text(`Date : ${new Date().toLocaleDateString()}`, 15, y);
        y += 20;
    
        // Split the agreement text into parts
        const firstLine = `I ${formData['your-name'] || '__________________'} son/daughter/spouse of ${formData['guardian-name'] || '__________________'} holder of National Identity Card No ${formData['cnic-number'] || '__________________'} and resident of ${formData['your-address'] || '__________________'} hereby enter into a partnership agreement with Kaswa Marketing and Business Developers, including its subsidiaries, Kaswa Motors and Property.`;
        
        const remainingText = `I have invested an amount of ${formData['investment-amount'] || '__________________'} per month for the period of ${formData['investment-Duration'] || '__________________'} in the ${formData['investment-type'] || '__________________'} offered by Kaswa Marketing and Business Developers. The duration of this agreement is ${formData['agreement-duration'] || '__________________'}.

    As per the terms of this agreement, Kaswa Marketing and Business Developers commits to providing me with monthly profit payments based on my partnership share.
    
    The current profit rate is ${formData['profit-rate'] || '__________________'}, though it is subject to fluctuations based on market conditions. I acknowledge and accept that returns may vary, and I agree to adhere to the stipulated terms in both profit and loss scenarios. This investment is made purely for business purposes, with an understanding of the associated risks.`;
    
        // Add first line with reduced width and paragraph spacing
        doc.setFontSize(12);
        const splitFirstLine = doc.splitTextToSize(firstLine, doc.internal.pageSize.width - 73);
        doc.text(splitFirstLine, 13, y);
        y += splitFirstLine.length * 7 + 10; // Added extra space after first paragraph
        
        // Add remaining text with normal width and paragraph spacing
        const splitRemainingText = doc.splitTextToSize(remainingText, doc.internal.pageSize.width - 20);
        doc.text(splitRemainingText, 10, y);
        y += splitRemainingText.length * 4 + 23; // Increased spacing before signatures
    
        // Signatures section with improved spacing
        doc.setFont("helvetica", "bold");
        doc.text("Signatures", pageWidth/2, y, { align: 'center' });
        y += 15; // Increased space after "Signatures" title
    
        doc.setFont("helvetica", "normal");
        
        // Investor Signature with increased spacing
        doc.text("Investor:", 22, y);
        doc.text("________________________", 22, y + 28); // Increased space
        doc.text(`Name: ${formData['your-name'] || '__________________'}`, 22, y + 38); // Increased space
        
        // Group Manager Signature with increased spacing
        const managerX = pageWidth - 120;
        doc.text("Group Manager:", managerX, y);
        doc.text("________________________", managerX, y + 28); // Increased space
        doc.text(`Name: ${formData['manager-name'] || '__________________'}`, managerX, y + 38); // Increased space
        
        y += 48; // Increased space between signature blocks
        
        // Group Head Signature with increased spacing
        doc.text("Group Head:", 22, y);
        doc.text("________________________", 22, y + 28); // Increased space
        doc.text(`Name: ${formData['group-head-name'] || '__________________'}`, 22, y + 38); // Increased space
        
        y += 35; // Final space after signatures
     
        // Add client photo (only for non-Payment Receipt forms)
        if (formData['clientImage']) {
            try {
                doc.addImage(formData['clientImage'], 'PNG', pageWidth - 60, 45, 45, 45); // Reduced height
            } catch (e) {
                console.error("Error adding client image:", e);
                doc.setFillColor(240, 240, 240);
                doc.roundedRect(pageWidth - 52, 45, 45, 45, 3, 3, 'F');
                doc.setFontSize(10);
                doc.setTextColor(100, 100, 100);
                doc.text("Client Photo", pageWidth - 32.5, 67, { align: 'center' });
            }
        } else {
            doc.setFillColor(240, 240, 240);
            doc.roundedRect(pageWidth - 52, 45, 45, 45, 3, 3, 'F');
            doc.setFontSize(10);
            doc.setTextColor(100, 100, 100);
            doc.text("Client Photo", pageWidth - 32.5, 67, { align: 'center' });
        }
        
        // Add fingerprint (only for non-Payment Receipt forms)
        if (formData['clientFingerprint']) {
            try {
                doc.addImage(formData['clientFingerprint'], 'PNG', pageWidth - 55, 230, 45, 50);
            } catch (e) {
                console.error("Error adding fingerprint:", e);
                doc.setFillColor(240, 240, 240);
                doc.roundedRect(pageWidth - 55, 230, 45, 50, 3, 3, 'F');
                doc.text("Fingerprint", pageWidth - 32.5, 250, { align: 'center' });
            }
        } else {
            doc.setFillColor(240, 240, 240);
            doc.roundedRect(pageWidth - 55, 230, 45, 50, 3, 3, 'F');
            doc.text("Fingerprint", pageWidth - 32.5, 250, { align: 'center' });
        }
        
    } else if (formType === 'investment') {
        doc.setFontSize(12);
        doc.text(`Date : ${new Date().toLocaleDateString()} `, 15, y);
        y += 15;
        
       // Investment Details
       doc.setFont("helvetica", "bold");
       doc.text("Investment Details:", 15, y);
       y += 8;
       doc.setFont("helvetica", "normal");
       doc.text(`Registration No: ${formData['registration-number'] || 'N/A'}`, 15, y);
       y += 7;
       doc.text(`Name of Plan: ${formData['plan-name'] || 'N/A'}`, 15, y);
       y += 7;
       doc.text(`Duration of Plan: ${formData['plan-duration'] || 'N/A'}`, 15, y);
       y += 7;
       doc.text(`Installment: Rs. ${formData['installment-amount'] || 'N/A'}`, 15, y);
       y += 18;

       // Save current y position for two-column layout
       const twoColumnStartY = y;

       // Heir Information (left Column)
       doc.setFont("helvetica", "bold");
       doc.text("Heir Information:", 15, y);
       y += 10;
       doc.setFont("helvetica", "normal");
       doc.text(`Heir's Name: ${formData['heir-name'] || 'N/A'}`, 15, y);
       y += 7;
       doc.text(`Parenthood/Marriage: ${formData['heir-relation'] || 'N/A'}`, 15, y);
       y += 7;
       doc.text(`Identity Card No: ${formData['heir-cnic'] || 'N/A'}`, 15, y);

       
       // Reset y position for right column
       y = twoColumnStartY - 40; 
       
       // Investor Information (right Column)
       doc.setFont("helvetica", "bold");
       doc.text("Investor Information:", 90, y);
       y += 11;
       doc.setFont("helvetica", "normal");
       doc.text(`Job Description: ${formData['job-description'] || 'N/A'}`, 90, y, { maxWidth: 110 });
       y += 8;
       doc.text(`Personal No : ${formData['personal-number'] || 'N/A'}`, 90, y);
       y += 8;
       doc.text(`Identity Card No: ${formData['cnic'] || 'N/A'}`, 90, y);
       y += 8;
       doc.text(`Parenthood/Marriage: ${formData['parent-spouse-name'] || 'N/A'}`, 90, y);
       y += 8;
       doc.text(`Name of Factory: ${formData['factory-name'] || 'N/A'}`, 90, y);
       y += 8;
       doc.text(`Name of Investor : ${formData['investor-name'] || 'N/A'}`, 90, y);
       y += 8;
       doc.text(`Business Description (Private): ${formData['business-description'] || 'N/A'}`, 90, y, { maxWidth: 110 });
       y += 8;
       doc.text(`Complete Address: ${formData['address'] || 'N/A'}`, 90, y, { maxWidth: 110 });
       
       // Set y position to continue after both columns
       y = twoColumnStartY + 45; // Adjust this value based on your actual content height
       
       // Terms & Conditions
       doc.setFont("helvetica", "bold");
       doc.text("Terms & Conditions:", 15, y);
       y += 10;
       doc.setFont("helvetica", "normal");
       doc.text("- Timely payment of installments is required under the committee plan.", 15, y, { maxWidth: 180 });
       y += 7;
       doc.text("- If an installment is missed during the agreement period, the profit for that month was not paid.", 15, y, { maxWidth: 180 });
       y += 7;
       doc.text("- The case of early contract termination, the deposited amount will be refunded from a term to complete.", 15, y, { maxWidth: 180 });
       y += 15;
       
       // Declaration
       doc.setFont("helvetica", "bold");
       doc.text("Declaration:", 15, y);
       y += 10;
       doc.setFont("helvetica", "normal");
       doc.text("I confirm that I have carefully read and understood all the terms and conditions.", 15, y, { maxWidth: 180 });
       y += 7;
       doc.text("PwM strictly follow the company's policies and procedures. In case of any legal issues, ", 15, y, { maxWidth: 180 });
       y += 7;
       doc.text("I will be responsible for this process. Kaswa Monthly responsibilities and the company ", 15, y, { maxWidth: 180 });
       y += 7;
       doc.text("will not be held accountable in any way. I also give permission for my investment to ", 15, y, { maxWidth: 180 });
       y += 7;
       doc.text("be used only for business purposes, where there are no other matters.", 15, y, { maxWidth: 180 });
       y += 15;
       
       // Signature and contact
       doc.text(`Mobile Number: ${formData['mobile-number'] || 'N/A'}`, 15, y);
       y += 25;
       doc.text(`Signature: ________________________`, 15, y);
       y += 10;
       doc.text(`Bank Account Details: ${formData['bank-account'] || 'N/A'}`, 15, y, { maxWidth: 180 });

       // Add client photo (only for non-Payment Receipt forms)
       if (formData['clientImage']) {
           try {
               doc.addImage(formData['clientImage'], 'PNG', pageWidth - 60, 45, 45, 45); // Reduced height
           } catch (e) {
               console.error("Error adding client image:", e);
               doc.setFillColor(240, 240, 240);
               doc.roundedRect(pageWidth - 52, 45, 45, 45, 3, 3, 'F');
               doc.setFontSize(10);
               doc.setTextColor(100, 100, 100);
               doc.text("Client Photo", pageWidth - 32.5, 67, { align: 'center' });
           }
       } else {
           doc.setFillColor(240, 240, 240);
           doc.roundedRect(pageWidth - 52, 45, 45, 45, 3, 3, 'F');
           doc.setFontSize(10);
           doc.setTextColor(100, 100, 100);
           doc.text("Client Photo", pageWidth - 32.5, 67, { align: 'center' });
       }
       
       // Add fingerprint (only for non-Payment Receipt forms)
       if (formData['clientFingerprint']) {
           try {
               doc.addImage(formData['clientFingerprint'], 'PNG', pageWidth - 55, 230, 45, 50);
           } catch (e) {
               console.error("Error adding fingerprint:", e);
               doc.setFillColor(240, 240, 240);
               doc.roundedRect(pageWidth - 55, 230, 45, 50, 3, 3, 'F');
               doc.text("Fingerprint", pageWidth - 32.5, 250, { align: 'center' });
           }
       } else {
           doc.setFillColor(240, 240, 240);
           doc.roundedRect(pageWidth - 55, 230, 45, 50, 3, 3, 'F');
           doc.text("Fingerprint", pageWidth - 32.5, 250, { align: 'center' });
       }

    } else if (formType === 'amount') {
        doc.setFontSize(12);
        doc.text(`Date : ${new Date().toLocaleDateString()} `, 15, y);
        y += 10;
        
        doc.setFont("helvetica", "normal");
        doc.text(`Registration NO: ${formData['registration-number'] || '__________________'}`, 15, y);
        y += 9.2;
        
        doc.text(`Name of Plan: ${formData['plan-name'] || '__________________'}`, 15, y);
        y += 9.2;
        
        doc.text(`Duration of Plan: ${formData['plan-duration'] || '__________________'}`, 15, y);
        y += 9.2;
        
        doc.text(`Amount: ${formData['amount'] || '__________________'}`, 15, y);
        y += 9.2;
        
        doc.text(`Name of Investor: ${formData['investor-name'] || '__________________'}`, 15, y);
        y += 9.2;
        
        // Personal No and Identity Card No side by side
        doc.text(`Personal No: ${formData['personal-number'] || '__________________'}`, 15, y);
        doc.text(`Heirs Name: ${formData['heir-name'] || '__________________'}`, 90, y);
        doc.text(`Identity Card No: ${formData['cnic'] || '__________________'}`, 100, y);
        y += 9.2;
        
        // Parenthood/Marriage and Name of Factory side by side
        doc.text(`Parenthood/Marriage: ${formData['parent-spouse-name'] || '__________________'}`, 15, y);
        doc.text(`Name of Factory: ${formData['factory-name'] || '__________________'}`, 100, y);
        y += 9.2;
        
        // Job Description and Business Description side by side
        doc.text(`Job Description: ${formData['job-description'] || '__________________'}`, 15, y);
        doc.text(`Business Description: ${formData['business-description'] || '__________________'}`, 100, y);
        y += 9.2;
        
        // Complete Address and Heirs Name side by side
        doc.text(`Complete Address: ${formData['address'] || '__________________'}`, 15, y);
        
        y += 14.5;
        
        // Terms & Conditions
        doc.setFont("helvetica", "bold");
        doc.text("Terms & Conditions", 15, y);
        y += 7;
        doc.setFont("helvetica", "normal");
        
        const terms = [
            "Investors must commit to the All Together Investment Plan for a minimum of 2 years.",
            "Monthly deductions may vary and are not fixed.",
            "Profits will be paid at the end of each month following the agreement date.",
            "If you end the contract early, any money you took in advance from the company will be deducted before the remaining amount is refunded",
            "A 90-day notice is required before requesting early contract termination."
        ];
        
        terms.forEach(term => {
            doc.text(`• ${term}`, 15, y, { maxWidth: 180 });
            y += 9;
        });
        
        y += 6;
        
        // Declaration
        doc.setFont("helvetica", "bold");
        doc.text("Declaration", 15, y);
        y += 7;
        doc.setFont("helvetica", "normal");
        
        const declaration = "I confirm that I have carefully read and understood all the terms and conditions mentioned above. I will strictly follow the company's policies and procedures. In case of any legal issues, I will be personally responsible, and the company will not be held accountable in any way. I also give permission for my investment to be used only for business purposes, where there may be both profit and loss.";
        
        doc.text(declaration, 15, y, { maxWidth: 180 });
        y += 45;
        
        // Final details
        doc.text(`Mobile Number: ${formData['mobile-number'] || '__________________'}`, 10, y);
        doc.text(`Signature: ${formData['signature'] || '__________________'}`, 90, y);
        y += 20;
        
        doc.text(`Bank Account Details: ${formData['bank-account'] || '__________________'}`, 10, y, { maxWidth: 180 });

        // Add client photo (only for non-Payment Receipt forms)
        if (formData['clientImage']) {
            try {
                doc.addImage(formData['clientImage'], 'PNG', pageWidth - 60, 45, 45, 45); // Reduced height
            } catch (e) {
                console.error("Error adding client image:", e);
                doc.setFillColor(240, 240, 240);
                doc.roundedRect(pageWidth - 52, 45, 45, 45, 3, 3, 'F');
                doc.setFontSize(10);
                doc.setTextColor(100, 100, 100);
                doc.text("Client Photo", pageWidth - 32.5, 67, { align: 'center' });
            }
        } else {
            doc.setFillColor(240, 240, 240);
            doc.roundedRect(pageWidth - 52, 45, 45, 45, 3, 3, 'F');
            doc.setFontSize(10);
            doc.setTextColor(100, 100, 100);
            doc.text("Client Photo", pageWidth - 32.5, 67, { align: 'center' });
        }
        
        // Add fingerprint (only for non-Payment Receipt forms)
        if (formData['clientFingerprint']) {
            try {
                doc.addImage(formData['clientFingerprint'], 'PNG', pageWidth - 55, 230, 45, 50);
            } catch (e) {
                console.error("Error adding fingerprint:", e);
                doc.setFillColor(240, 240, 240);
                doc.roundedRect(pageWidth - 55, 230, 45, 50, 3, 3, 'F');
                doc.text("Fingerprint", pageWidth - 32.5, 250, { align: 'center' });
            }
        } else {
            doc.setFillColor(240, 240, 240);
            doc.roundedRect(pageWidth - 55, 230, 45, 50, 3, 3, 'F');
            doc.text("Fingerprint", pageWidth - 32.5, 250, { align: 'center' });
        }
    
    } else if (formType === 'agreement amount') {
        doc.setFontSize(12);
        doc.text(`Date : ${new Date().toLocaleDateString()}`, 15, y);
        y += 20;
    
        // Split the agreement text into parts
        const firstLine = `I ${formData['your-name'] || '__________________'} son/daughter/spouse of ${formData['guardian-name'] || '__________________'} holder of National Identity Card No ${formData['cnic-number'] || '__________________'} and resident of ${formData['your-address'] || '__________________'} hereby enter into a partnership agreement with Kaswa Marketing and Business Developers, including its subsidiaries, Kaswa Motors and Property.`;
        
        const remainingText = `I have invested an amount of ${formData['investment-amount'] || '__________________'} in the ${formData['investment-type'] || '__________________'} offered by Kaswa Marketing and Business Developers. The duration of this agreement is ${formData['agreement-duration'] || '__________________'}.

    As per the terms of this agreement, Kaswa Marketing and Business Developers commits to providing me with monthly profit payments based on my partnership share.
    
    The current profit rate is ${formData['profit-rate'] || '__________________'}, though it is subject to fluctuations based on market conditions. I acknowledge and accept that returns may vary, and I agree to adhere to the stipulated terms in both profit and loss scenarios. This investment is made purely for business purposes, with an understanding of the associated risks.`;
    
        // Add first line with reduced width and paragraph spacing
        doc.setFontSize(12);
        const splitFirstLine = doc.splitTextToSize(firstLine, doc.internal.pageSize.width - 73);
        doc.text(splitFirstLine, 13, y);
        y += splitFirstLine.length * 7 + 10; // Added extra space after first paragraph
        
        // Add remaining text with normal width and paragraph spacing
        const splitRemainingText = doc.splitTextToSize(remainingText, doc.internal.pageSize.width - 20);
        doc.text(splitRemainingText, 10, y);
        y += splitRemainingText.length * 4 + 23; // Increased spacing before signatures
    
        // Signatures section with improved spacing
        doc.setFont("helvetica", "bold");
        doc.text("Signatures", pageWidth/2, y, { align: 'center' });
        y += 15; // Increased space after "Signatures" title
    
        doc.setFont("helvetica", "normal");
        
        // Investor Signature with increased spacing
        doc.text("Investor:", 22, y);
        doc.text("________________________", 22, y + 28); // Increased space
        doc.text(`Name: ${formData['your-name'] || '__________________'}`, 22, y + 38); // Increased space
        
        // Group Manager Signature with increased spacing
        const managerX = pageWidth - 120;
        doc.text("Group Manager:", managerX, y);
        doc.text("________________________", managerX, y + 28); // Increased space
        doc.text(`Name: ${formData['manager-name'] || '__________________'}`, managerX, y + 38); // Increased space
        
        y += 48; // Increased space between signature blocks
        
        // Group Head Signature with increased spacing
        doc.text("Group Head:", 22, y);
        doc.text("________________________", 22, y + 28); // Increased space
        doc.text(`Name: ${formData['group-head-name'] || '__________________'}`, 22, y + 38); // Increased space
        
        y += 35; // Final space after signatures

        // Add client photo (only for non-Payment Receipt forms)
        if (formData['clientImage']) {
            try {
                doc.addImage(formData['clientImage'], 'PNG', pageWidth - 60, 45, 45, 45); // Reduced height
            } catch (e) {
                console.error("Error adding client image:", e);
                doc.setFillColor(240, 240, 240);
                doc.roundedRect(pageWidth - 52, 45, 45, 45, 3, 3, 'F');
                doc.setFontSize(10);
                doc.setTextColor(100, 100, 100);
                doc.text("Client Photo", pageWidth - 32.5, 67, { align: 'center' });
            }
        } else {
            doc.setFillColor(240, 240, 240);
            doc.roundedRect(pageWidth - 52, 45, 45, 45, 3, 3, 'F');
            doc.setFontSize(10);
            doc.setTextColor(100, 100, 100);
            doc.text("Client Photo", pageWidth - 32.5, 67, { align: 'center' });
        }
        
        // Add fingerprint (only for non-Payment Receipt forms)
        if (formData['clientFingerprint']) {
            try {
                doc.addImage(formData['clientFingerprint'], 'PNG', pageWidth - 55, 230, 45, 50);
            } catch (e) {
                console.error("Error adding fingerprint:", e);
                doc.setFillColor(240, 240, 240);
                doc.roundedRect(pageWidth - 55, 230, 45, 50, 3, 3, 'F');
                doc.text("Fingerprint", pageWidth - 32.5, 250, { align: 'center' });
            }
        } else {
            doc.setFillColor(240, 240, 240);
            doc.roundedRect(pageWidth - 55, 230, 45, 50, 3, 3, 'F');
            doc.text("Fingerprint", pageWidth - 32.5, 250, { align: 'center' });
        }

    } else if (formType === 'Payment Receipt') {
        let y = 50;
        
        doc.setFont("helvetica", "bold");
        doc.setFontSize(18);
        doc.text("KASWA MARKETING NETWORK(Pvt.)Ltd.", 105, y, { align: 'center' });
        y += 8;
        doc.setFontSize(14);
        doc.text("KASWA MOTORS AND PROPERTY", 105, y, { align: 'center' });
        y += 8;
        doc.setFont("helvetica", "normal");
        doc.setFontSize(11);
        doc.text("Office number LG - 2, Gulshan e Anwar Plaza, Gulshan Anwar, Wah Cantt.", 90, y, { align: 'center' });
        y += 8;
        doc.text("051-459-6140", 105, y, { align: 'center' });
        y += 16;
        
        doc.setFont("helvetica", "bold");
        doc.setFontSize(14);
        doc.text("PAYMENT RECEIPT", 105, y, { align: 'center' });
        y += 16;
        
        doc.setFont("helvetica", "normal");
        doc.text(`REGISTRATION NO: ${formData['registration-number'] || 'ABC-1007'}`, 15, y);
        y += 12;
        
        const name = formData['your-name'] || 'Client Name';
        const cellNo = formData['contact-number'] || 'Cell NO';
        doc.text(`NAME: ${name}`, 15, y);
        doc.text(`CELL NO: ${cellNo}`, 105, y);
        y += 8;
        
        doc.text(`S/O,D/O,W/O: ${formData['parent-spouse'] || 'F/N , S/N'}`, 15, y);
        y += 11;
        
        const address = formData['address'] || 'permanent Address';
        doc.text(`ADDRESS: ${address}`, 15, y, { maxWidth: 180 });
        y += 18;
        
        const amountFigure = formData['amount-figure'] || '3,00,000/-';
        doc.text(`AMOUNT IN FIGURE: ${amountFigure} RUPEES ONLY`, 15, y);
        y += 10;
        
        const amountWords = formData['amount-words'] || 'THREE LAC  RUPEES ONLY';
        doc.text(`AMOUNT IN WORDS: ${amountWords}`, 15, y, { maxWidth: 180 });
        y += 12;
        
        const chequeNo = formData['cheque-number'] || '';
        doc.text(`CHQ NO: ${chequeNo}`, 15, y);
        y += 17;
        
        doc.setFont("helvetica", "bold");
        doc.text("RECEIVING AUTHORITY:", 15, y);
        
        y += 45;
        doc.setDrawColor(0);
        doc.setLineWidth(0.5);
        doc.line(15, y, 60, y);
        
        y += 17;
        const today = new Date();
        const formattedDate = today.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        }).replace(/\//g, '-');
        doc.text(`Date: ${formData['receipt-date'] || formattedDate}`, 15, y);
        
        doc.setDrawColor(0);
        doc.setLineWidth(0.5);
        doc.rect(10, 10, 190, y + 10);
    }

    // Add footer
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text("Kaswa Marketing and Business Developers", pageWidth/5, pageHeight - 7, { align: 'center' });
    doc.text(`Generated on ${new Date().toLocaleString()}`, pageWidth - 17, pageHeight - 7, { align: 'right' });
    
    // Save the PDF
    doc.save(`${formType}_form_${new Date().toISOString().slice(0,10)}.pdf`);
}

function generateDOCX(formData, formType) {
    const doc = new docx.Document({
        styles: {
            paragraphStyles: [{
                id: "normal",
                name: "Normal",
                run: {
                    size: 24, // 12pt
                    font: "Calibri"
                },
                paragraph: {
                    spacing: {
                        line: 280, // 1.15 line spacing
                    }
                }
            },
            {
                id: "boldUserData",
                name: "Bold User Data",
                run: {
                    size: 24,
                    font: "Calibri",
                    bold: true
                },
                paragraph: {
                    spacing: {
                        line: 280,
                    }
                }
            }]
        }
    });

    // Improved helper function to handle bold formatting
    const formatWithBoldData = (text, formKey) => {
        if (formData[formKey]) {
            return [
                new docx.TextRun({ text: text.replace('__________________', ''), style: "normal" }),
                new docx.TextRun({ text: formData[formKey], bold: true })
            ];
        }
        return new docx.TextRun({ text: text, style: "normal" });
    };

    // Create document children array
    const children = [];

    // Add title
    children.push(
        new docx.Paragraph({
            text: "Kaswa Marketing and Business Developers",
            heading: docx.HeadingLevel.HEADING_1,
            alignment: docx.AlignmentType.CENTER,
            spacing: { after: 200 }
        }),
        
        new docx.Paragraph({
            text: formType === 'agreement investment' ? "Monthly Investment Agreement" : 
                  formType === 'investment' ? "Investment Application Form" :
                  formType === 'amount' ? "Amount Investment Form" :
                  formType === 'agreement amount' ? "Lump Sum Investment Agreement" :
                  "Payment Receipt",
            heading: docx.HeadingLevel.HEADING_2,
            alignment: docx.AlignmentType.CENTER,
            spacing: {
                after: 200
            }
        })
    );

    // Add form data
    for (const [key, value] of Object.entries(formData)) {
        if (key === 'clientImage' || key === 'clientFingerprint') continue; // Skip image data for DOCX
        
        children.push(
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: `${key}: `,
                        bold: true
                    }),
                    new docx.TextRun({
                        text: value || 'N/A'
                    })
                ],
                spacing: {
                    after: 100
                }
            })
        );
    }

    // Add signature placeholders
    if (formType === 'agreement investment' || formType === 'investment' || formType === 'amount' || formType === 'agreement amount') {
        children.push(
            new docx.Paragraph({
                text: "Signatures",
                heading: docx.HeadingLevel.HEADING_3,
                alignment: docx.AlignmentType.CENTER,
                spacing: {
                    before: 400,
                    after: 200
                }
            }),
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: "Investor: ________________________",
                        bold: true
                    }),
                    new docx.TextRun({
                        text: "\t\t\t",
                        bold: true
                    }),
                    new docx.TextRun({
                        text: "Company Representative: ________________________",
                        bold: true
                    })
                ],
                spacing: {
                    after: 200
                }
            })
        );
    }

    doc.addSection({
        children: children
    });

    // Generate and download the DOCX file
    docx.Packer.toBlob(doc).then(blob => {
        saveAs(blob, `${formType}_form_${new Date().toISOString().slice(0,10)}.docx`);
    });
}

function takeImage() {
    openWebcam();
}

// Webcam and Image Capture Logic
const webcamModal = document.getElementById("webcam-modal");
const webcamVideo = document.getElementById("webcam-video");
const captureBtn = document.getElementById("capture-btn");
const webcamCanvas = document.getElementById("webcam-canvas");
const closeModal = document.querySelector(".close-modal");
const imagePreviewContainer = document.getElementById("image-preview-container");
const imagePreview = document.getElementById("image-preview");
const doneBtn = document.getElementById("done-btn");
const reCaptureBtn = document.getElementById("re-capture-btn");

let currentStream = null;
let capturedImageDataUrl = null;

// Open Webcam Modal
function openWebcam() {
    webcamModal.classList.remove("hidden");
    startWebcam();
    imagePreviewContainer.classList.add("hidden");
    captureBtn.style.display = "block";
}

// Close Webcam Modal
closeModal.addEventListener("click", () => {
    webcamModal.classList.add("hidden");
    stopWebcam();
    imagePreviewContainer.classList.add("hidden");
    captureBtn.style.display = "block";
});

// Start Webcam
function startWebcam() {
    if (currentStream) {
        stopWebcam();
    }

    const constraints = {
        video: {
            width: { ideal: 1280 },
            height: { ideal: 720 },
            facingMode: "user"
        },
        audio: false
    };

    navigator.mediaDevices.getUserMedia(constraints)
        .then((stream) => {
            currentStream = stream;
            webcamVideo.srcObject = stream;
            webcamVideo.play();
        })
        .catch((error) => {
            console.error("Error accessing webcam:", error);
            alert("Error accessing webcam: " + error.message);
        });
}

// Stop Webcam
function stopWebcam() {
    if (currentStream) {
        currentStream.getTracks().forEach(track => {
            track.stop();
        });
        currentStream = null;
    }
}

// Capture Image
captureBtn.addEventListener("click", () => {
    const context = webcamCanvas.getContext("2d");
    webcamCanvas.width = webcamVideo.videoWidth;
    webcamCanvas.height = webcamVideo.videoHeight;
    context.drawImage(webcamVideo, 0, 0, webcamCanvas.width, webcamCanvas.height);

    capturedImageDataUrl = webcamCanvas.toDataURL("image/png");

    imagePreview.innerHTML = `<img src="${capturedImageDataUrl}" alt="Captured Image">`;
    imagePreviewContainer.classList.remove("hidden");
    captureBtn.style.display = "none";
});

// Done button - place image on form and close modal
doneBtn.addEventListener("click", () => {
    if (capturedImageDataUrl) {
        const imagePlaceholder = document.querySelector("#form-container .form-image-placeholder");
        if (imagePlaceholder) {
            imagePlaceholder.innerHTML = `
                <img src="${capturedImageDataUrl}" 
                     alt="Captured Image" 
                     style="width: 100%; height: 100%; object-fit: cover; border-radius: 5px;">
            `;
        }
    }
    
    webcamModal.classList.add("hidden");
    stopWebcam();
    imagePreviewContainer.classList.add("hidden");
    captureBtn.style.display = "block";
});

// Re-capture button - go back to camera view
reCaptureBtn.addEventListener("click", () => {
    imagePreviewContainer.classList.add("hidden");
    captureBtn.style.display = "block";
});

// Fingerprint Scanner Logic
const fingerprintModal = document.getElementById("fingerprint-modal");
const fingerprintScannerPlaceholder = document.getElementById("fingerprint-scanner-placeholder");
const captureFingerprintBtn = document.getElementById("capture-fingerprint-btn");
const fingerprintPreviewContainer = document.getElementById("fingerprint-preview-container");
const fingerprintPreview = document.getElementById("fingerprint-preview");
const fingerprintDoneBtn = document.getElementById("fingerprint-done-btn");
const fingerprintReCaptureBtn = document.getElementById("fingerprint-re-capture-btn");
const closeFingerprintModalBtn = document.querySelector("#fingerprint-modal .close-modal");

// Create a hidden file input element
const fingerprintFileInput = document.createElement('input');
fingerprintFileInput.type = 'file';
fingerprintFileInput.accept = 'image/bmp,image/png,image/jpeg';
fingerprintFileInput.style.display = 'none';

let capturedFingerprintDataUrl = null;

// Open Fingerprint Modal - called by the existing finger scan button
function takeFingerScan() {
    fingerprintModal.classList.remove("hidden");
    startFingerprintScanner();
    fingerprintPreviewContainer.classList.add("hidden");
    captureFingerprintBtn.style.display = "block";
}

// Close Fingerprint Modal
function closeFingerprintModal() {
    fingerprintModal.classList.add("hidden");
    fingerprintPreviewContainer.classList.add("hidden");
    captureFingerprintBtn.style.display = "block";
}

// Start Fingerprint Scanner
function startFingerprintScanner() {
    fingerprintScannerPlaceholder.innerHTML = "<p>Click 'Capture' to select fingerprint image</p>";
    captureFingerprintBtn.disabled = false;
}

// Handle file selection
fingerprintFileInput.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(event) {
        capturedFingerprintDataUrl = event.target.result;
        
        fingerprintPreview.innerHTML = `
            <img src="${capturedFingerprintDataUrl}" alt="Selected Fingerprint" style="max-width: 100%; max-height: 200px;">
            <p style="color: green; margin-top: 10px;">Fingerprint image selected</p>
        `;
        fingerprintPreviewContainer.classList.remove("hidden");
        captureFingerprintBtn.style.display = "none";
    };
    reader.readAsDataURL(file);
});

// Capture Fingerprint - now opens file dialog
captureFingerprintBtn.addEventListener("click", () => {
    fingerprintFileInput.click();
});

// Done button - place fingerprint on form and close modal
fingerprintDoneBtn.addEventListener("click", () => {
    if (capturedFingerprintDataUrl) {
        const fingerprintPlaceholder = document.querySelector("#form-container .form-fingerprint-placeholder");
        if (fingerprintPlaceholder) {
            fingerprintPlaceholder.innerHTML = `
                <img src="${capturedFingerprintDataUrl}" 
                     alt="Captured Fingerprint" 
                     style="width: 100%; height: 100%; object-fit: cover; border-radius: 5px;">
            `;
        }
    }
    closeFingerprintModal();
});

// Re-capture button - go back to scanner view
fingerprintReCaptureBtn.addEventListener("click", () => {
    fingerprintPreviewContainer.classList.add("hidden");
    captureFingerprintBtn.style.display = "block";
    startFingerprintScanner();
});

// Close modal when clicking the X button
closeFingerprintModalBtn.addEventListener("click", closeFingerprintModal);

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
    document.body.appendChild(fingerprintFileInput);
});

