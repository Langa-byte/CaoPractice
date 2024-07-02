var newwindow=null;
function ReportError(url){
    newwindow = window.open(url,'ReportError','height=750,width=600');
    if (window.focus) {
	    newwindow.focus();
	}	
}