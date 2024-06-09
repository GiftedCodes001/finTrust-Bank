let calCurrencyLabelElem = document.getElementById('fromCurrencyName');
let selectElem = document.getElementById('fromCurrency');

function showFromCurrencyName(){
  let valuup = selectElem.value;
  document.getElementById('fromCurrencyName').innerHTML=valuup
  console.log(valuup);
}


//------------Onload Welcome Slide Function------------//
let exploreContent = document.querySelector('.content');
let setTime = 1000;

window.onload = function(){
    setTimeout(()=>{
        exploreContent.classList.add('explore-slide-in');
    }, setTime)
}

//------------Sticky Navbar Function------------//
window.addEventListener('scroll', showNavbar);
function showNavbar(){
    let area = window.scrollY;
    let navbar = document.getElementById('stickyNavbar');
    if (area >= 154){
        navbar.classList.add('showNavbar');
    }else{
        navbar.classList.remove('showNavbar');
    }
}

//------------Show Sec-2 Card Function------------//
let cards = document.querySelectorAll('.js-slide-card');
window.addEventListener('scroll', ()=>{
    cards.forEach(card => {
        // let top = card.offsetTop - 1000;
        let top = card.offsetTop - 800;
        let scroll = window.scrollY;
        
        if (scroll >= top){
            card.classList.add('showCard');
            
        }
        // else{
        //     card.classList.remove('showCard');
        // }
    })
})

//------------Back to Top Function------------//
let toTop = document.getElementById('bkToTop');

window.addEventListener("scroll", ()=>{
    if(window.scrollY > 100){
        toTop.classList.add('show-bk-to-top');
    }else{
        toTop.classList.remove('show-bk-to-top');
    }
})

//------------About Functionality------------//
let buttons = document.querySelectorAll('.abt-btns button');
buttons.forEach(button =>{
    button.addEventListener('click', (event)=>{
        let placeClicked = event.target;
        let aboutinfo = document.querySelector('.about-info');
        let vision = 'Our Online banking platform aims to create a seamless and secure digital experience for managing your finances. With an intuitive inyterface and cutting-edge technology, our website will offer a wide range of features designed to cater to your unique banking needs.';
        let mission = 'Our Mission is to empower individuals and businesses with a secure, user friendly and feature-rich online banking platform. We are dedicated to offering a deverse range of innovative financial tools and peronalized services that enable our customer to manage their finances conveniently and efficiently. ';
        let goal = 'Our Online banking service is designed to help you manage your finances and achieve your financial goals in the most convenient and secure way possible. We provide easy-to-use tools and innovativefeatures that make managing your money simple and hassle free.';
        let styleVision = document.getElementById('vision');
        let styleMission = document.getElementById('mission');
        if(placeClicked.classList.contains('vision')){
            aboutinfo.innerText=vision;
            document.querySelector('#goal').classList.remove('active-abt');
            styleMission.classList.remove('active-abt');
            styleVision.classList.add('active-abt');
        }else if(placeClicked.classList.contains('mission')){
            aboutinfo.innerText=mission;
            document.querySelector('#goal').classList.remove('active-abt');
            styleVision.classList.remove('active-abt');
            styleMission.classList.add('active-abt');
        }else if(placeClicked.classList.contains('goal')){
            aboutinfo.innerText=goal;
            styleVision.classList.remove('active-abt');
            styleMission.classList.remove('active-abt');
            document.querySelector('#goal').classList.add('active-abt');
        }
    })
})

//------------Open Menu Function------------//
let menuDiv = document.querySelector('.menu-div');
let menuIcon = document.querySelectorAll('#showMenu');
let closeMenu = document.querySelector('.closeMenu');

menuIcon.forEach(allMenu =>{
    allMenu.addEventListener('click', ()=>{
        menuDiv.classList.add('open-menu')
    })
})

closeMenu.addEventListener('click', ()=>{
    menuDiv.classList.remove('open-menu')
})

//------------Mortgage Input Field Function------------//
const elements = document.querySelectorAll('.js-home-value input, .js-down-payment input, .js-loan-amount input, .js-interest-rate input, .js-loan-duration input');
// console.log(inputField);

elements.forEach(element =>{
    element.addEventListener('mouseover', event =>{
        let positionClicked = event.target;
        let parentDiv = element.parentElement;
        if (positionClicked.classList.contains('love')) {
            
            parentDiv.classList.add('show-field');
        } else {
            parentDiv.classList.remove('show-field')
            console.log('Away');
        }
    });
    element.addEventListener('mouseout', event =>{
        let positionClicked = event.target;
        let parentDiv = element.parentElement;
        parentDiv.classList.remove('show-field');
    });
    element.addEventListener('click', event =>{
        let positionClicked = event.target;
        let parentDiv = element.parentElement;
        if (positionClicked.classList.contains('love')) {
            
            parentDiv.classList.add('show-field');
        } else {
            parentDiv.classList.remove('show-field')
            console.log('Away');
        }
    });
});

//------------Mortgage Calculation Function------------//
const homeValue = document.getElementById('homeValue');
const downPayment = document.getElementById('downPayment');
const loanAmount = document.getElementById('loanAmount');
const interestRate = document.getElementById('interestRate');
const loanDuration = document.getElementById('loanDuration');

const form = document.getElementById('mortgageForm');

function showLoanCost(){
    loanAmount.value = homeValue.value - downPayment.value;
    let loanAmountValue = loanAmount.value;
    return loanAmountValue;
}

function calculateMortgage(loanAmount, interestRate, numberMonthlyPayments) {
    function percentageToDecimal(percent) {
        return percent / 12 / 100;
    }
    interestRate = percentageToDecimal(interestRate);

    function yearsToMonth(year) {
        return year * 12;
    }

    numberMonthlyPayments = yearsToMonth(numberMonthlyPayments);

    let mortgage = (interestRate * loanAmount) / (1- Math.pow(1 + interestRate, -numberMonthlyPayments));

    return parseFloat(mortgage.toFixed(2));
} 


function validate(){
    let showAlert1 = document.querySelector('.js-show-alert');
    let showAlert2 = document.querySelector('.js-show-alert2');
    if (!homeValue.value || 
        !interestRate.value ||
        !loanDuration.value
    ) {
        showAlert1.classList.add('showAlert');
        setInterval(() => {
            showAlert1.classList.remove('showAlert');
        }, 4000);
    }else if (!downPayment.value) {
        showAlert2.classList.add('showAlert');
        setInterval(() => {
            showAlert2.classList.remove('showAlert');
        }, 4000);
    } 
}

//------------Crypto Converter Function------------//
// function showCurrencyName() {
//     var selectCurrency = document.getElementById("toCurrency");
//     var currencyName = selectCurrency.options[selectCurrency.selectedIndex].text;
//     document.getElementById("currencyName").innerHTML = currencyName;
//     console.log(currencyName);
//   }
//   showCurrencyName();
//   console.log('Still Working Till Bottom');
// alert('Working');