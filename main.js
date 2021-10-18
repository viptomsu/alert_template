function toast({
   title = '',
   msg = '',
   type = 'info',
   duration = 3000
}) {
   const main = document.getElementById('toasts');
   if (main) {
      const toast = document.createElement('div');
      const icons = {
         success: "fa-solid fa-circle-check",
         info: "fa-solid fa-circle-info",
         warning: "fa-solid fa-circle-exclamation",
         danger: "fa-solid fa-circle-radiation"
      }
      const fadeOutTime = 400;
      toast.classList.add('toast', `toast--${type}`);
      toast.style.animation = `slideIn 0.3s ease-in-out, fadeOut ${fadeOutTime/1000}s linear ${duration/1000}s forwards`;
      toast.innerHTML = `
         <div class="toast__icon">
            <i class="${icons[type]}"></i>
         </div>
         <div class="toast__body">
            <h3 class="toast__title">${title}</h3>
            <p class="toast__msg">${msg}</p>
         </div>
         <div class="toast__close">
            <i class="fa-solid fa-xmark"></i>
         </div>
      `;
      main.appendChild(toast);
      setTimeout(function () {
         main.removeChild(toast);
      }, duration + fadeOutTime + 400)
   }
}
function btnClicked(btns,
   titleParameter = '',
   msgParameter = '',
   typeParameter = 'info',
   durationParameter = 1000
) {
   for (const btn of btns) {
      btn.onclick = function () {
         toast({
            title: titleParameter,
            msg: msgParameter,
            type: typeParameter,
            duration: durationParameter
         })
      }
   }
}

const btnSuccess = document.getElementsByClassName('btn--success');
const btnInfo = document.getElementsByClassName('btn--info');
const btnWarning = document.getElementsByClassName('btn--warning');
const btnDanger = document.getElementsByClassName('btn--danger');

btnClicked(btnSuccess, 'Success', 'Your tickets will be sent to you soon', 'success', 1000);
btnClicked(btnInfo, 'Information', 'New informations', 'info', 1000);
btnClicked(btnWarning, 'Warning', 'This action may harm your computer', 'warning', 1000);
btnClicked(btnDanger, 'Error', 'Please try again later', 'danger', 1000);