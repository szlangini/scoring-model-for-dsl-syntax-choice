$(document).ready(function(){
    
    $("#start").click(function(){
    
        // First Page!
    
var weightingPage = '<p class="lead"> Please weight the following DSL purposes according to your objectives:</p>'+
'    <p>The sum of the weights shall add up to a total of 1.'+
'    It is allowed to enter decimal numbers with up to 2 decimal digits</p>'+
'<form id="w_form">'+
'  <div class="form-group">'+
'    <label for="w_technical">Technical Implementation</label>'+
'    <input type="number" class="form-control" id="w_technical" placeholder="0.00" min="0.00" max="1.00" step=0.01 required="required">'+
'  </div>'+
'  <div class="form-group">'+
'    <label for="w_communication">Communication Basis</label>'+
'    <input type="number" class="form-control" id="w_communication" placeholder="0.00" min="0.00" max="1.00" step=0.01 required="required">'+
'  </div>'+
'    <div class="form-group">'+
'    <label for="w_economic">Economical Orientation</label>'+
'    <input type="number" class="form-control" id="w_economic" placeholder="0.00" min="0.00" max="1.00" step=0.01 required="required">'+
'  </div>'+
'  <button type="submit" class="btn btn-primary" id="w_entering">Enter</button>'+
'</form>';
	

    
    $(".jumbotron").html(weightingPage);


// Check for correct submission
$("#w_form").submit(function(event){
    var errorMsg = "";
    var tech_weight = Number($("#w_technical").val());
    var comm_weight = Number($("#w_communication").val());
    var eco_weight = Number($("#w_economic").val());
    var sum = tech_weight + comm_weight + eco_weight;

    if (sum > 1){
        errorMsg = errorMsg + "The sum of the weightings exceed the upper bound of 1. Please adjust accordingly ";
    }
    if (sum < 1){
        errorMsg = errorMsg + "The sum of the weightings is below 1. Please adjust accordingly";
    }
    if (errorMsg != ""){
        alert(errorMsg);
    } else{
        // proceed to criteria catalogue
var keyPage = '<p class="lead">In the following 20 different criteria for choosing a suitable concrete syntax will be presented. Please use this key to estimate the relevance of each criteria according to your objective:</p>'+
'    <hr class="my-4"/>'+
'    <table class="table">'+
'  <thead>'+
'    <tr>'+
'      <th scope="col">Estimated Relevance</th>'+
'      <th scope="col">Symbol</th>'+
'    </tr>'+
'  </thead>'+
'  <tbody>'+
'    <tr>'+
'      <th scope="row">Irrelevant</th>'+
'      <td>-</td>'+
'    </tr>'+
'    <tr>'+
'      <th scope="row">Neutral</th>'+
'      <td>o</td>'+
'    </tr>'+
'    <tr>'+
'      <th scope="row">Sligthly Important</th>'+
'      <td>+</td>'+
'    </tr>'+
'        <tr>'+
'      <th scope="row">Important</th>'+
'      <td>++</td>'+
'    </tr>'+
'        <tr>'+
'      <th scope="row">Very Important</th>'+
'      <td>+++</td>'+
'    </tr>'+
'  </tbody>'+
'</table>'+
'<center><a class="btn btn-primary btn-lg" href="#" role="button" id="okay">Okay</a></center>';
	
$(".jumbotron").html(keyPage);

    $("#okay").click(function(){
        // Show Criteria catalogue (5 per page)
        


var relevanceOnePage = '<p class="small" style="text-align: right;">1/4</p>'+
'    <p class="lead">How relevant do you think is...</p>'+
'    <hr class="my-4"/>'+
'    <form>'+
'    <div class="form-group">'+
'    <label for="tool-support">Tool support (maintenance, versioning, IDEs)? </label>'+
'    <select required class="form-control" id="tool-support">'+
'      <option disabled="disabled" selected="selected">-- SELECT --</option>'+
'      <option>(-) Irrelevant</option>'+
'      <option>(o) Neutral</option>'+
'      <option>(+) Slightly Relevant</option>'+
'      <option>(++) Relevant</option>'+
'      <option>(+++) Very Relevant</option>'+
'    </select>'+
'    </div>'+
'    <div class="form-group">'+
'    <label for="teamwork-support">Teamwork support?</label>'+
'    <select required class="form-control" id="teamwork-support">'+
'      <option disabled="disabled" selected="selected">-- SELECT --</option>'+
'      <option>(-) Irrelevant</option>'+
'      <option>(o) Neutral</option>'+
'      <option>(+) Slightly Relevant</option>'+
'      <option>(++) Relevant</option>'+
'      <option>(+++) Very Relevant</option>'+
'    </select>'+
'    </div>'+
'    <div class="form-group">'+
'    <label for="architecture">Complexity reduction (architecture, control flows)?</label>'+
'    <select required class="form-control" id="architecture">'+
'      <option disabled="disabled" selected="selected">-- SELECT --</option>'+
'      <option>(-) Irrelevant</option>'+
'      <option>(o) Neutral</option>'+
'      <option>(+) Slightly Relevant</option>'+
'      <option>(++) Relevant</option>'+
'      <option>(+++) Very Relevant</option>'+
'    </select>'+
'    </div>'+
'    <div class="form-group">'+
'    <label for="loops">Complexity reduction (code, loops)? </label>'+
'    <select required class="form-control" id="loops">'+
'      <option disabled="disabled" selected="selected">-- SELECT --</option>'+
'      <option>(-) Irrelevant</option>'+
'      <option>(o) Neutral</option>'+
'      <option>(+) Slightly Relevant</option>'+
'      <option>(++) Relevant</option>'+
'      <option>(+++) Very Relevant</option>'+
'    </select>'+
'    </div>'+
'    <div class="form-group">'+
'    <label for="outcome-limit">Limiting the possible outcomes?</label>'+
'    <select required class="form-control" id="outcome-limit">'+
'      <option disabled="disabled" selected="selected">-- SELECT --</option>'+
'      <option>(-) Irrelevant</option>'+
'      <option>(o) Neutral</option>'+
'      <option>(+) Slightly Relevant</option>'+
'      <option>(++) Relevant</option>'+
'      <option>(+++) Very Relevant</option>'+
'    </select>'+
'    </div>'+
'	<button type="submit" class="btn btn-primary" id="next_page_1" style="position: relative; float: right;">Next ></button>'+
'</form>';
	


	
$(".jumbotron").html(relevanceOnePage);

	$("#next_page_1").click(function(){
		
	var selectedOptions = $(".form-control option:selected").text();
	
	if (selectedOptions.search('-- SELECT --') != -1) {
		alert("Please select an option for every criterion.");

	} else{
		// proceed here 
		
		// 1. Storing the information
		
		
	}
		
	//alert($("#tool-support option:selected").text());
		
		
		
	})

        
    })
        
        
    }
    
})
   


    
    })
})