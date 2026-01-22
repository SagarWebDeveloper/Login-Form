        const form = document.getElementById('loginForm');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const button = form.querySelector('button');

        [emailInput, passwordInput].forEach(input => {
            input.addEventListener('focus', () => {
                input.classList.add('animate-bounce-in');
            });
            input.addEventListener('blur', () => {
                input.classList.remove('animate-bounce-in');
            });
        });

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = emailInput.value;
            const password = passwordInput.value;

            if (email && password) {
                button.textContent = 'Logging in...';
                button.classList.add('bg-green-600', 'hover:bg-green-700');
                setTimeout(() => {
                    alert('Login successful!'); // Replace with actual login logic
                    button.textContent = 'Login';
                    button.classList.remove('bg-green-600', 'hover:bg-green-700');
                }, 2000);
            } else {
                form.classList.add('shake');
                setTimeout(() => form.classList.remove('shake'), 500);
            }
        });
        