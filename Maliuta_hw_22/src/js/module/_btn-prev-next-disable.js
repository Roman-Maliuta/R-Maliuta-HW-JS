export function btnPrevNextDisable(responsData, btnPrev, btnNext) {
    if (responsData.page === responsData.total_pages) {
        btnPrev.disabled = false;
        btnNext.disabled = true;
      } else if (responsData.page === 1){
        btnPrev.disabled = true;
        btnNext.disabled = false;
      }else {
        btnPrev.disabled = false;
        btnNext.disabled = false; 
      };
};
