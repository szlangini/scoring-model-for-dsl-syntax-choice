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
        


var relevanceOnePage = '<p class="small" style="text-align: right;">Technical Implementation 1/3</p>'+
'    <p class="lead">How relevant do you think is...</p>'+
'    <hr class="my-4"/>'+
'    <form>'+
'    <div class="form-group">'+
'    <label for="tool-support">Tool support (maintenance, versioning, IDEs)? </label>'+
'    <select required class="form-control textual-syntax" id="tool-support">'+
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
'    <select required class="form-control graphical-syntax" id="teamwork-support">'+
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
'    <select required class="form-control textual-syntax" id="architecture">'+
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
'    <select required class="form-control textual-syntax" id="loops">'+
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
'    <select required class="form-control textual-syntax" id="outcome-limit">'+
'      <option disabled="disabled" selected="selected">-- SELECT --</option>'+
'      <option>(-) Irrelevant</option>'+
'      <option>(o) Neutral</option>'+
'      <option>(+) Slightly Relevant</option>'+
'      <option>(++) Relevant</option>'+
'      <option>(+++) Very Relevant</option>'+
'    </select>'+
'    </div>'+
 '   <div class="form-group">  '  + 
 '   	<label for="gui-development">Development of a GUI?</label>  '  + 
 '       <select required class="form-control graphical-syntax" id="gui-development">  '  + 
 '         <option disabled="disabled" selected="selected">-- SELECT --</option>  '  + 
 '         <option>(-) Irrelevant</option>  '  + 
 '        <option>(o) Neutral</option>  '  + 
 '        <option>(+) Slightly Relevant</option>  '  + 
 '         <option>(++) Relevant</option>  '  + 
 '         <option>(+++) Very Relevant</option>  '  + 
 '       </select>  '  + 
 '   	</div>  '  + 
 '   	<div class="form-group">  '  + 
 '   	<label for="modeling-support">Modeling support?</label>  '  + 
 '       <select required class="form-control graphical-syntax" id="modeling-support">  '  + 
 '         <option disabled="disabled" selected="selected">-- SELECT --</option>  '  + 
 '         <option>(-) Irrelevant</option>  '  + 
 '        <option>(o) Neutral</option>  '  + 
 '        <option>(+) Slightly Relevant</option>  '  + 
 '         <option>(++) Relevant</option>  '  + 
 '         <option>(+++) Very Relevant</option>  '  + 
 '       </select>  '  + 
 '   	</div>  '  + 
 '       <div class="form-group">  '  + 
 '   	<label for="combination">Combination with further DSL</label>  '  + 
 '       <select required class="form-control textual-syntax" id="combination">  '  + 
 '         <option disabled="disabled" selected="selected">-- SELECT --</option>  '  + 
 '         <option>(-) Irrelevant</option>  '  + 
 '        <option>(o) Neutral</option>  '  + 
 '        <option>(+) Slightly Relevant</option>  '  + 
 '         <option>(++) Relevant</option>  '  + 
 '         <option>(+++) Very Relevant</option>  '  + 
 '       </select>  '  + 
 '      </div>  '+ 
'	<button type="submit" class="btn btn-primary" id="next_page_1" style="position: relative; float: right;">Next ></button>'+
'</form>';
	


	
$(".jumbotron").html(relevanceOnePage);

	$("#next_page_1").click(function(){
		
	var selectedOptions = $(".form-control option:selected").text();
	
	if (selectedOptions.search('-- SELECT --') != -1) {
		alert("Please select an option for every criterion.");

	} else{
		// proceed here
		var points_textual = 0;
		var points_graphical = 0;
		var benefit_text_textual = "";
		var benefit_text_graphical = "";
		
		// 1. Add Estimation numerical value to syntax types
		// .textual-syntax
		// .graphical-syntax
		
		//1.1 Textual
		// 1.1.1 count all estimations
		var relevance_string = $(".textual-syntax option:selected").text();
		var count_irrelevant = (relevance_string.match(/(-)/g) || []).length;
		var count_neutral = (relevance_string.match(/(o)/g) || []).length;
		var count_s_relevant = (relevance_string.match(/(Slightly)/g) || []).length;
		var count_relevant = (relevance_string.match(/(\) Relevant)/g) || []).length;
		var count_v_relevant = (relevance_string.match(/(\+\+\+)/g) || []).length;
		// 1.1.2 multiply with points granted per syntax type
		
		points_textual = points_textual + (4*count_neutral) + (6*count_s_relevant) + (8*count_relevant) + (10*count_v_relevant);
		points_graphical = points_graphical + (10*count_irrelevant) + (6*count_neutral)+(4*count_s_relevant) + (2*count_relevant);
		
		
		// 1.2 Graphical
		// 1.1.1 count all estimations
		relevance_string = $(".graphical-syntax option:selected").text();
		var count_irrelevant = (relevance_string.match(/(-)/g) || []).length;
		var count_neutral = (relevance_string.match(/(o)/g) || []).length;
		var count_s_relevant = (relevance_string.match(/(Slightly)/g) || []).length;
		var count_relevant = (relevance_string.match(/(\) Relevant)/g) || []).length;
		var count_v_relevant = (relevance_string.match(/(\+\+\+)/g) || []).length;
		// 1.1.2 multiply with points granted per syntax type ATTENTION NEED TO BE SWAPPED
		points_graphical = points_graphical + (4*count_neutral) + (6*count_s_relevant) + (8*count_relevant) + (10*count_v_relevant);
		points_textual = points_textual + (10*count_irrelevant) + (6*count_neutral)+(4*count_s_relevant) + (2*count_relevant);


		// 1.3 Safe as proper Variables
		var t_textual_weighted = points_textual*tech_weight;
		points_textual = 0;
		
		var t_graphical_weighted = points_graphical*tech_weight;
		points_graphical = 0;
		
		

		// 1.4 open the new Page 2/3
		var relevanceTwoPage =  '       <p class="small" style="text-align: right;">Communication Basis 2/3</p>  '  + 
 '       <p class="lead">How relevant do you think is...</p>  '  + 
 '       <hr class="my-4"/>  '  + 
 '       <form>  '  + 
 '   	<div class="form-group">  '  + 
 '   	<label for="ext-comm">External communication, such as to customers?</label>  '  + 
 '       <select required class="form-control graphical-syntax" id="ext-comm">  '  + 
 '         <option disabled="disabled" selected="selected">-- SELECT --</option>  '  + 
 '         <option>(-) Irrelevant</option>  '  + 
 '        <option>(o) Neutral</option>  '  + 
 '        <option>(+) Slightly Relevant</option>  '  + 
 '         <option>(++) Relevant</option>  '  + 
 '         <option>(+++) Very Relevant</option>  '  + 
 '       </select>  '  + 
 '   	</div>  '  + 
 '   	<div class="form-group">  '  + 
 '   	<label for="comm-within">Communication within programming teams?</label>  '  + 
 '       <select required class="form-control textual-syntax" id="comm-within">  '  + 
 '         <option disabled="disabled" selected="selected">-- SELECT --</option>  '  + 
 '         <option>(-) Irrelevant</option>  '  + 
 '        <option>(o) Neutral</option>  '  + 
 '        <option>(+) Slightly Relevant</option>  '  + 
 '         <option>(++) Relevant</option>  '  + 
 '         <option>(+++) Very Relevant</option>  '  + 
 '       </select>  '  + 
 '   	</div>  '  + 
 '       <div class="form-group">  '  + 
 '   	<label for="symbols">Use of domain-specific symbols?</label>  '  + 
 '       <select required class="form-control graphical-syntax" id="symbols">  '  + 
 '         <option disabled="disabled" selected="selected">-- SELECT --</option>  '  + 
 '         <option>(-) Irrelevant</option>  '  + 
 '        <option>(o) Neutral</option>  '  + 
 '        <option>(+) Slightly Relevant</option>  '  + 
 '         <option>(++) Relevant</option>  '  + 
 '         <option>(+++) Very Relevant</option>  '  + 
 '       </select>  '  + 
 '       </div>  '  + 
 '   	<div class="form-group">  '  + 
 '   	<label for="req-eng">Requirements engineering</label>  '  + 
 '       <select required class="form-control graphical-syntax" id="req-eng">  '  + 
 '         <option disabled="disabled" selected="selected">-- SELECT --</option>  '  + 
 '         <option>(-) Irrelevant</option>  '  + 
 '        <option>(o) Neutral</option>  '  + 
 '        <option>(+) Slightly Relevant</option>  '  + 
 '         <option>(++) Relevant</option>  '  + 
 '         <option>(+++) Very Relevant</option>  '  + 
 '       </select>  '  + 
 '   	</div>  '  + 
 '   	<div class="form-group">  '  + 
 '   	<label for="get-involved">Possibility for external actors to get involved in modeling?</label>  '  + 
 '       <select required class="form-control graphical-syntax" id="get-involved">  '  + 
 '         <option disabled="disabled" selected="selected">-- SELECT --</option>  '  + 
 '         <option>(-) Irrelevant</option>  '  + 
 '        <option>(o) Neutral</option>  '  + 
 '        <option>(+) Slightly Relevant</option>  '  + 
 '         <option>(++) Relevant</option>  '  + 
 '         <option>(+++) Very Relevant</option>  '  + 
 '       </select>  '  + 
 '   	</div>  '  + 
 '       <div class="form-group">  '  + 
 '   	<label for="collab">Collaboration within programming teams?</label>  '  + 
 '       <select required class="form-control textual-syntax" id="collab">  '  + 
 '         <option disabled="disabled" selected="selected">-- SELECT --</option>  '  + 
 '         <option>(-) Irrelevant</option>  '  + 
 '        <option>(o) Neutral</option>  '  + 
 '        <option>(+) Slightly Relevant</option>  '  + 
 '         <option>(++) Relevant</option>  '  + 
 '         <option>(+++) Very Relevant</option>  '  + 
 '       </select>  '  + 
 '       </div>  '  + 
 '   	    <div class="form-group">  '  + 
 '   	<label for="knowledge">Domain-specific knowledge of all applicants?</label>  '  + 
 '       <select required class="form-control graphical-syntax" id="knowledge">  '  + 
 '         <option disabled="disabled" selected="selected">-- SELECT --</option>  '  + 
 '         <option>(-) Irrelevant</option>  '  + 
 '        <option>(o) Neutral</option>  '  + 
 '        <option>(+) Slightly Relevant</option>  '  + 
 '         <option>(++) Relevant</option>  '  + 
 '         <option>(+++) Very Relevant</option>  '  + 
 '       </select>  '  + 
 '       </div>  '  + 
 '   	<button type="submit" class="btn btn-primary" id="next_page_2" style="position: relative; float: right;">Next ></button>  '  + 
 '  </form>  ' ; 
		
		$(".jumbotron").html(relevanceTwoPage);

	$("#next_page_2").click(function(){
		// Continue with communication
		var selectedOptions = $(".form-control option:selected").text();
	
	if (selectedOptions.search('-- SELECT --') != -1) {

	} else{ 
	
		// proceed here
		 points_textual = 0;
		 points_graphical = 0;

		
		// 1. Add Estimation numerical value to syntax types
		// .textual-syntax
		// .graphical-syntax
		
		//1.1 Textual
		// 1.1.1 count all estimations
		 relevance_string = $(".textual-syntax option:selected").text();
		 count_irrelevant = (relevance_string.match(/(-)/g) || []).length;
		 count_neutral = (relevance_string.match(/(o)/g) || []).length;
		 count_s_relevant = (relevance_string.match(/(Slightly)/g) || []).length;
		 count_relevant = (relevance_string.match(/(\) Relevant)/g) || []).length;
		 count_v_relevant = (relevance_string.match(/(\+\+\+)/g) || []).length;
		// 1.1.2 multiply with points granted per syntax type
		
		points_textual = points_textual + (4*count_neutral) + (6*count_s_relevant) + (8*count_relevant) + (10*count_v_relevant);
		points_graphical = points_graphical + (10*count_irrelevant) + (6*count_neutral)+(4*count_s_relevant) + (2*count_relevant);
		
		
		// 1.2 Graphical
		// 1.1.1 count all estimations
		relevance_string = $(".graphical-syntax option:selected").text();
		 count_irrelevant = (relevance_string.match(/(-)/g) || []).length;
		 count_neutral = (relevance_string.match(/(o)/g) || []).length;
		 count_s_relevant = (relevance_string.match(/(Slightly)/g) || []).length;
		 count_relevant = (relevance_string.match(/(\) Relevant)/g) || []).length;
		 count_v_relevant = (relevance_string.match(/(\+\+\+)/g) || []).length;
		// 1.1.2 multiply with points granted per syntax type ATTENTION NEED TO BE SWAPPED
		points_graphical = points_graphical + (4*count_neutral) + (6*count_s_relevant) + (8*count_relevant) + (10*count_v_relevant);
		points_textual = points_textual + (10*count_irrelevant) + (6*count_neutral)+(4*count_s_relevant) + (2*count_relevant);


		// 1.3 multiply with weighting
		var c_textual_weighted = points_textual*comm_weight;
		points_textual = 0;
		
		var c_graphical_weighted = points_graphical*comm_weight;
		points_graphical = 0;
	
		// 1.4 push next page
		var relevanceThreePage =  '       <p class="small" style="text-align: right;">Economical Orientation 3/3</p>  '  + 
 '       <p class="lead">How relevant do you think is...</p>  '  + 
 '       <hr class="my-4"/>  '  + 
 '       <form>  '  + 
 '   	<div class="form-group">  '  + 
 '   	<label for="cost-eff">Cost-effective development of DSLs?</label>  '  + 
 '       <select required class="form-control textual-syntax" id="cost-eff">  '  + 
 '         <option disabled="disabled" selected="selected">-- SELECT --</option>  '  + 
 '         <option>(-) Irrelevant</option>  '  + 
 '        <option>(o) Neutral</option>  '  + 
 '        <option>(+) Slightly Relevant</option>  '  + 
 '         <option>(++) Relevant</option>  '  + 
 '         <option>(+++) Very Relevant</option>  '  + 
 '       </select>  '  + 
 '   	</div>  '  + 
 '   	<div class="form-group">  '  + 
 '   	<label for="short-dev">Short development time of DSL?</label>  '  + 
 '       <select required class="form-control textual-syntax" id="short-dev">  '  + 
 '         <option disabled="disabled" selected="selected">-- SELECT --</option>  '  + 
 '         <option>(-) Irrelevant</option>  '  + 
 '        <option>(o) Neutral</option>  '  + 
 '        <option>(+) Slightly Relevant</option>  '  + 
 '         <option>(++) Relevant</option>  '  + 
 '         <option>(+++) Very Relevant</option>  '  + 
 '       </select>  '  + 
 '   	</div>  '  + 
 '       <div class="form-group">  '  + 
 '   	<label for="tool-meeting">DSL as a tool in customer meetings?</label>  '  + 
 '       <select required class="form-control graphical-syntax" id="tool-meeting">  '  + 
 '         <option disabled="disabled" selected="selected">-- SELECT --</option>  '  + 
 '         <option>(-) Irrelevant</option>  '  + 
 '        <option>(o) Neutral</option>  '  + 
 '        <option>(+) Slightly Relevant</option>  '  + 
 '         <option>(++) Relevant</option>  '  + 
 '         <option>(+++) Very Relevant</option>  '  + 
 '       </select>  '  + 
 '       </div>  '  + 
 '   	<div class="form-group">  '  + 
 '   	<label for="indiv">Individualized end products?</label>  '  + 
 '       <select required class="form-control graphical-syntax" id="indiv">  '  + 
 '         <option disabled="disabled" selected="selected">-- SELECT --</option>  '  + 
 '         <option>(-) Irrelevant</option>  '  + 
 '        <option>(o) Neutral</option>  '  + 
 '        <option>(+) Slightly Relevant</option>  '  + 
 '         <option>(++) Relevant</option>  '  + 
 '         <option>(+++) Very Relevant</option>  '  + 
 '       </select>  '  + 
 '   	</div>  '  + 
 '   	<div class="form-group">  '  + 
 '   	<label for="transparency">Transparency for customers?</label>  '  + 
 '       <select required class="form-control graphical-syntax" id="transparency">  '  + 
 '         <option disabled="disabled" selected="selected">-- SELECT --</option>  '  + 
 '         <option>(-) Irrelevant</option>  '  + 
 '        <option>(o) Neutral</option>  '  + 
 '        <option>(+) Slightly Relevant</option>  '  + 
 '         <option>(++) Relevant</option>  '  + 
 '         <option>(+++) Very Relevant</option>  '  + 
 '       </select>  '  + 
 '   	</div>  '  + 
 '   	<button type="submit" class="btn btn-warning" id="evaluate" style="position: relative; float: center; width: 100%;">Evaluate!</button>  '  + 
 '  </form>  ' ; 
		
		$(".jumbotron").html(relevanceThreePage);
	
	$("#evaluate").click(function(){
		// Continue with communication
		var selectedOptions = $(".form-control option:selected").text();
	
	if (selectedOptions.search('-- SELECT --') != -1) {

	} else{ 
	
				// proceed here
		 points_textual = 0;
		 points_graphical = 0;

		
		// 1. Add Estimation numerical value to syntax types
		// .textual-syntax
		// .graphical-syntax
		
		//1.1 Textual
		// 1.1.1 count all estimations
		 relevance_string = $(".textual-syntax option:selected").text();
		 count_irrelevant = (relevance_string.match(/(-)/g) || []).length;
		 count_neutral = (relevance_string.match(/(o)/g) || []).length;
		 count_s_relevant = (relevance_string.match(/(Slightly)/g) || []).length;
		 count_relevant = (relevance_string.match(/(\) Relevant)/g) || []).length;
		 count_v_relevant = (relevance_string.match(/(\+\+\+)/g) || []).length;
		// 1.1.2 multiply with points granted per syntax type
		
		points_textual = points_textual + (4*count_neutral) + (6*count_s_relevant) + (8*count_relevant) + (10*count_v_relevant);
		points_graphical = points_graphical + (10*count_irrelevant) + (6*count_neutral)+(4*count_s_relevant) + (2*count_relevant);
		
		
		// 1.2 Graphical
		// 1.1.1 count all estimations
		relevance_string = $(".graphical-syntax option:selected").text();
		 count_irrelevant = (relevance_string.match(/(-)/g) || []).length;
		 count_neutral = (relevance_string.match(/(o)/g) || []).length;
		 count_s_relevant = (relevance_string.match(/(Slightly)/g) || []).length;
		 count_relevant = (relevance_string.match(/(\) Relevant)/g) || []).length;
		 count_v_relevant = (relevance_string.match(/(\+\+\+)/g) || []).length;
		// 1.1.2 multiply with points granted per syntax type ATTENTION NEED TO BE SWAPPED
		points_graphical = points_graphical + (4*count_neutral) + (6*count_s_relevant) + (8*count_relevant) + (10*count_v_relevant);
		points_textual = points_textual + (10*count_irrelevant) + (6*count_neutral)+(4*count_s_relevant) + (2*count_relevant);


		// 1.3 multiply with weighting
		var e_textual_weighted = points_textual*eco_weight;
		points_textual = 0;
		
		var e_graphical_weighted = points_graphical*eco_weight;
		points_graphical = 0;
	
		// Now add all weighted points together
		var total_textual = t_textual_weighted + c_textual_weighted + e_textual_weighted;
		var total_graphical = t_graphical_weighted + c_graphical_weighted + e_graphical_weighted;
		
        
		if (total_textual > total_graphical) {
			alert("A textual syntax is recommended.");
            
            
            var text_page = '<center>'+
'        <p class="lead">A Texutal Syntax is Recommended!</p>'+
'        <p class="small">Points for Textual Syntax: <strong>47</strong> </p>'+
'        <p class="small" id="lose">Points for Graphical Syntax: 30 </p>'+
'        <img src="iconText.png" class="img-thumbnail" alt="Responsive image" style="width: 40%;">'+
'    </center>';
	
        $(".jumbotron").html(text_page);
            
        $("strong").html(total_textual.toFixed(1));
        $("#lose").html('Points for Graphical Syntax: ' + total_graphical.toFixed(1));
        

            
            
		} else{
            
            var graphic_page =
'    <center>'+
'        <p class="lead">A Graphical Syntax is Recommended!</p>'+
'        <p class="small">Points for Graphical Syntax: <strong>47</strong> </p>'+
'        <p class="small" id="lose">Points for Textual Syntax: 30 </p>'+
'        <img src="iconGrafik.png" class="img-thumbnail" alt="Responsive image" style="width: 50%;">'+
'    </center>';      
            
        $(".jumbotron").html(graphic_page);
            
        $("strong").html(total_graphical.toFixed(1));
        $("#lose").html('Points for Textual Syntax: ' + total_textual.toFixed(1));

	

		}
	
	
	
	
	}

	
	})
		
		
		
	}
		
		
	})
		
	//alert($("#tool-support option:selected").text());
		
		
		
	}

        
    })
        
        
    })
    
}
   


    
    })
})

})
