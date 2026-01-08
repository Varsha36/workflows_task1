let currentStep = 0; 
const states = ["Plan", "Design", "Execute", "Deliver"];

function move(direction) {
    const role = document.querySelector('input[name="role"]:checked').value;
    
    if (direction === 'promote') {
        
        if (currentStep === 0 && role !== 'Planner') return; 
       
        if (currentStep === 1 && role !== 'Designer') return; 
        
        if (currentStep === 2 && role !== 'Manufacturer') return; 

        if (currentStep < 3) currentStep++; 
    } 
    else if (direction === 'demote') {
        
        if (currentStep === 1 && role !== 'Designer') return;
        
        if (currentStep === 2 && role !== 'Manufacturer') return;
        
        if (currentStep === 3 && role !== 'Delivery Manager') return;

        if (currentStep > 0) currentStep--; 
    }

    updateUI();
}

function updateUI() {
    
    for (let i = 0; i < 4; i++) {
        const el = document.getElementById(`state-${i}`);
        if (i === currentStep) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    }
}
