
document.addEventListener('DOMContentLoaded', function () {

    function handleCustomizeFormSubmission(event) {
        event.preventDefault(); 
        
        var fileInput = document.querySelector('input[type="file"]');
        var braceletTypeSelect = document.querySelector('select');
        var numThreadsInput = document.querySelector('input[type="number"][min="4"]');
        var numColorsInput = document.querySelectorAll('input[type="number"]')[1];
        var firstColorInput = document.querySelectorAll('input[type="color"]')[0];
        var secondColorInput = document.querySelectorAll('input[type="color"]')[1];
        var thirdColorInput = document.querySelectorAll('input[type="color"]')[2];
        var descriptionTextarea = document.querySelector('textarea');
        var emailInput = document.querySelector('input[type="email"]');
        var phoneNumberInput = document.querySelector('input[type="tel"]');

        
        var formData = {
            file: fileInput.value,
            braceletType: braceletTypeSelect.value,
            numThreads: numThreadsInput.value,
            numColors: numColorsInput.value,
            firstColor: firstColorInput.value,
            secondColor: secondColorInput.value,
            thirdColor: thirdColorInput.value,
            description: descriptionTextarea.value,
            email: emailInput.value,
            phoneNumber: phoneNumberInput.value
        };

        
        console.log(formData);

        event.target.reset();
    }

    var customizeForm = document.querySelector('form');
    if (customizeForm) {
        customizeForm.addEventListener('submit', handleCustomizeFormSubmission);
    }

});
