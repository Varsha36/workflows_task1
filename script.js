let currentStep = 0; // 0: Plan, 1: Design, 2: Execute, 3: Deliver
const steps = ["Plan", "Design", "Execute", "Deliver"];

function handleWorkflow(action) {
    // Get the selected role from radio buttons 
    const role = document.querySelector('input[name="role"]:checked').value;
    
    if (action === 'promote') {
        // Only planner can promote from Plan 
        if (currentStep === 0 && role !== 'Planner') return alert("Access Denied: Only Planner can promote from Plan.");
        
        // Only designer can promote from Design 
        if (currentStep === 1 && role !== 'Designer') return alert("Access Denied: Only Designer can promote from Design.");
        
        // Only Manufacturer can promote from Execute 
        if (currentStep === 2 && role !== 'Manufacturer') return alert("Access Denied: Only Manufacturer can promote from Execute.");

        if (currentStep < 3) currentStep++; // Promote highlights next 
    } 
    else if (action === 'demote') {
        // Only designer can demote from Design 
        if (currentStep === 1 && role !== 'Designer') return alert("Access Denied: Only Designer can demote.");
        
        // Only Manufacturer can demote from Execute 
        if (currentStep === 2 && role !== 'Manufacturer') return alert("Access Denied: Only Manufacturer can demote.");
        
        // Only Delivery Manager can demote from Delivery 
        if (currentStep === 3 && role !== 'Delivery Manager') return alert("Access Denied: Only Delivery Manager can demote.");

        if (currentStep > 0) currentStep--; // Demote highlights previous 
    }

    updateDisplay();
}

function updateDisplay() {
    // Reset all buttons to white and highlight current as orange 
    for (let i = 0; i < 4; i++) {
        const btn = document.getElementById(`btn-${i}`);
        if (i === currentStep) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    }
}