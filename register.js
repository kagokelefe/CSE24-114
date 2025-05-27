document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');
    const registerModal = document.getElementById('registerModal');
    const modal = new bootstrap.Modal(registerModal);

    // Form submission
    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();
        
        if (registrationForm.checkValidity()) {
            // Get form data
            const formData = {
                name: document.getElementById('registerName').value,
                phone: document.getElementById('registerPhone').value
            };

            // Here you would typically send the data to your server
            console.log('Registration data:', formData);

            // Show success message
            Swal.fire({
                title: 'Success!',
                text: 'Registration successful! We will contact you soon.',
                icon: 'success',
                confirmButtonColor: '#212529'
            }).then((result) => {
                // Clear form and close modal
                registrationForm.reset();
                modal.hide();
            });
        }

        registrationForm.classList.add('was-validated');
    });

    // Reset form validation when modal is closed
    registerModal.addEventListener('hidden.bs.modal', function () {
        registrationForm.classList.remove('was-validated');
        registrationForm.reset();
    });
}); 