/*

Div Slider Version: 0.1.0
By Konstantino Sparakis
Copyright (c) 2014

Div Slider is 100% free and open-source.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the 'Software'), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
$(document).on('change', '.btn-file :file', function() {
    var input = $(this),
        numFiles = input.get(0).files ? input.get(0).files.length : 1,
        label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
    input.trigger('fileselect', [numFiles, label]);
});

var inputCount = 0;
var isChecked = true;
var tmppath; 
$(document).ready(function() {
  

$('#titleForm').hide();
$("[name='my-checkbox']").bootstrapSwitch();

	
	$('#fileGetter').change( function(event) {
      var getter = URL.createObjectURL(event.target.files[0]);
       console.log(getter);
	   console.log("het");
	   tmppath = getter;
     });



    $('.btn-file :file').on('fileselect', function(event, numFiles, label) {
        console.log(numFiles);
        console.log(label);
    });

        $('#remote').hide();
		$('#local').show();
	

$('input[name="my-checkbox"]').on('switchChange.bootstrapSwitch', function(event, state) {

  	if(state)
	{
		$('#remote').hide();
		$('#local').show();
		isChecked = true;
	}
	else
	{
		
		$('#local').hide();
		$('#remote').show();
		isChecked = false;
	}
});
  
      var numberOfpages = 2;  //Change to number of pages you have

   //This hides all pages except the start at page
		var startAtPage = 0;  //Change to page # you want to start at || DEFAULT = 0;
		
		for(var i=0;i < numberOfpages+1;i++)
			  {
				    var fielder = "#page"+i;
				  if(i == startAtPage)
				  {
					//do nothing
					$(fielder).toggleClass('pages start-page');;
				  }
				  else{

					  $(fielder).hide(); 
				  }
			  }


    //Thanks goes out to TrazeK on stack overflow for assistance on this
    $('.forward').click(function() {
        $this = $(this);
        flipPage($this.data('current'), $this.data('next'));
    });
    $('.back').click(function() {
        $this = $(this);
        flipBack($this.data('current'), $this.data('back'));
    });


	
});  ////////
//////
////
///// ENDD OF DOCUMENT.onReady



//Slides  to the left for going to next page
     function flipPage(fromPage,toPage)
     {
        var fromPage = "#page"+ fromPage;
        var toPage = "#page"+ toPage;


                                           // v  Changes animaton duration
        $(fromPage).animate({left: '-150%'}, 500, function() {
                $(fromPage).hide();   
                $(toPage).animate({left: '20%'},200, function(){}).show();
        });

    }

     //slides to the right, for going back a page
    function flipBack(fromPage,toPage)
    {
        var fromPage = "#page"+ fromPage;
        var toPage = "#page"+ toPage;

        $(fromPage).animate({left: '150%'}, 500, function() {
            $(fromPage).hide();   
            $(toPage).animate({left: '20%'},200, function(){}).show();
        });
    }
	
function createNewItem()
{
	$('#welcome').hide();
	$('#titleForm').show();
	if(inputCount%2==0)
{
	var create = " <div id='inputs"+inputCount+"' style=' background-color:#f5f7fa;margin-top:0px;width:500px;margin-left:auto;margin-right:auto;padding-bottom:5px;padding-left:8px;padding-top:1px'><h5> Input "+inputCount+":<a class='btn btn-danger'href='#' style='width:25px;height:25px;float:right;margin-right:5px' onClick='deleteItem("+inputCount+");'>x</a></h5> <div id='remote'class='input-group' style='width:150px;float:none;z-index:0;'><span class='input-group-btn'><span class='btn btn-primary btn-file' style='width:60px'>Value:</span></span><input  style='width:150px;display:inline-block;margin-right:20px' id='iv"+inputCount+"' type='text' class='form-control'><span class='input-group-btn'><span class='btn btn-primary btn-file' style='width:60px'>Key:</span></span><input  style='width:150px;display:inline-block' id='in"+inputCount+"' type='text' class='form-control'></div> <!-- input-group --></div></div>";
	
}else{
	var create = " <div id='inputs"+inputCount+"' style=' background-color:#e6e9ed;margin-top:0px;width:500px;margin-left:auto;margin-right:auto;padding-bottom:5px;padding-left:8px;padding-top:1px'><h5> Input "+inputCount+":<a class='btn btn-danger'href='#' style='width:25px;height:25px;float:right;margin-right:5px' onClick='deleteItem("+inputCount+");'>x</a></h5> <div id='remote'class='input-group' style='width:150px;float:none;z-index:0;'><span class='input-group-btn'><span class='btn btn-primary btn-file' style='width:60px'>Value:</span></span><input  style='width:150px;display:inline-block;margin-right:20px' id='iv"+inputCount+"' type='text' class='form-control'><span class='input-group-btn'><span class='btn btn-primary btn-file' style='width:60px'>Key:</span></span><input  style='width:150px;display:inline-block' id='in"+inputCount+"' type='text' class='form-control'></div> <!-- input-group --></div></div>";
}
	$( "#page0" ).append( create );
	
	inputCount ++;
	//Adds input to table
	
	
}


function clearForm()
{
	$('#welcome').show();
	$('#titleForm').hide();
	for(i=0;i<inputCount+1;i++)
	{
		$("#inputs"+i).remove();
	}
	inputCount =0;
}

function TestSubmit()
{
	createForm();
	flipPage(0,1);
	$("#submit-Form").ajaxSubmit({success:showResults});
	
	
	return false;
}

function createForm()
{
	//get location to submit
	var action;
	if(isChecked == true) // local
	{
       
  		action = tmppath;
		console.log(tmppath);
	}
	else{ //remote
	    
	    var header =$( "#remoteType option:selected" ).text();
		console.log(header);
		action = header + $('#remoteValue').val();;
			console.log(action);
	}
  		$("#submit-Form").replaceWith(" <form id='submit-Form' action='"+action+"' method='post' ></form>");
		
	//loop through all divs to get value and add them to form as hidden
	
	for(i=0;i<inputCount;i++)
	{
		var create = " <input type='hidden' name='"+$('#in'+i).val+"' value='"+$('#iv'+i).val+"'>";
		$( "#submit-Form" ).append( create );
	}
	
}

function showResults(data)
{
	
	$("textArea").replaceWith( "<div id='textArea' class='textArea'>"+data+"</div>");
}



function deleteItem(itemNum)
{
	$('#in'+itemNum).val('');
	$('#iv'+itemNum).val('');

}

