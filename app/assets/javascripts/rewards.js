$(document).on("ready page:change",function(){
	$("button[data-item]").click(function(){
		var item = $(this).data("item");
		$("#redemptionModal .modal-title")
			.text("Redeem RM 10 " + item);
		$("#redemptionModal .modal-body")
			.text("Each " + item + " will cost you 100 points");
		$("#reward_choice").val(item);
		$("#redemptionModal").modal("show");
	})
})