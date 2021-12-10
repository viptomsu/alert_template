const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

function slideHandler(duration) {
   const tabs = $$('.tab-item');
   const tabContents = $$('.tab-content');
   console.log(tabs);

   function underline(activeTab) {
      const line = $('.line');
      line.style.left = activeTab.offsetLeft + 'px';
      line.style.width = activeTab.offsetWidth + 'px';
   }
   
   function activeTab(index) {
      const tabContent = tabContents[index];
      $('.tab-item.active').classList.remove('active');
      $('.tab-content.active').classList.remove('active');
      tabs[index].classList.add('active');
      tabContent.classList.add('active');
      underline(tabs[index]);
   }

   underline($('.tab-item.active'));

   // click tab
   tabs.forEach((tab, index) => {
      tab.onclick = function() {
         activeTab(index);
      }
   })

   // slide auto run
   setInterval(() => {
      for(let i = 0; i < tabs.length; i++) {
         if(tabs[i].classList.contains('active')){
            if(++i < tabs.length) {
               activeTab(i);
            } else activeTab(0);
            break;
         }
      }
   }, duration*1000);
}

slideHandler(2);

