window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 100);
  });
  
  document.querySelectorAll('.faq').forEach(faq => {
    faq.addEventListener('click', () => {
      faq.classList.toggle('open');
      const icon = faq.querySelector('.faq__icon i');
      icon.className = icon.className === 'uil uil-plus' ? 'uil uil-minus' : 'uil uil-plus';
    });
  });
  
  const menu = document.querySelector('.nav__menu');
  const menuBtn = document.querySelector('#open-menu-btn');
  const closeBtn = document.querySelector('#close-menu-btn');
  
  menuBtn.addEventListener('click', () => {
    menu.style.display = 'flex';
    closeBtn.style.display = 'inline-block';
    menuBtn.style.display = 'none';
  });
  
  closeBtn.addEventListener('click', () => {
    menu.style.display = 'none';
    closeBtn.style.display = 'none';
    menuBtn.style.display = 'inline-block';
  });
  
  const SignUpValidation = (event) => {
    const inputs = [
      { id: 'inp1', regex: /^[A-Za-z]+$/, errMsg: 'Please Enter Valid Text' },
      { id: 'inp2', regex: /^[A-Za-z]+$/, errMsg: 'Please Enter Valid Text' },
      { id: 'inp3', regex: /^[0-9]+$/, errMsg: 'Please Enter Valid Reg Number' },
      { id: 'inp4', regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, errMsg: 'Please Enter Valid Email' },
      { id: 'inp5', regex: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/, errMsg: 'Password should have at least 8 characters, including at least one uppercase letter, one lowercase letter, and one digit.' }
    ];
  
    let valid = true;
  
    inputs.forEach(input => {
      const inpElem = document.getElementById(input.id);
      const inpSpan = document.getElementById(`inpSpan${input.id.slice(-1)}`);
  
      if (inpElem.value === '' || !input.regex.test(inpElem.value)) {
        inpSpan.innerText = inpElem.value === '' ? 'Please enter a value' : input.errMsg;
        valid = false;
      } else {
        inpSpan.innerText = '';
      }
    });
  
    const inp5 = document.getElementById('inp5');
    const inp6 = document.getElementById('inp6');
    const inpSpan6 = document.getElementById('inpSpan6');
  
    if (inp5.value !== inp6.value) {
      inpSpan6.innerText = 'Passwords do not match';
      valid = false;
    } else {
      inpSpan6.innerText = '';
    }
  
    if (!valid) {
      event.preventDefault();
      alert('Please fill in all required fields.');
   
  