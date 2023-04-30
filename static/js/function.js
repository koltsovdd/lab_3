$("button[name='btn_delete_function']").click(function() {

    var data = { function_name : $(this).data('function_name')}

    $.ajax({
      type: 'POST',
      url: "/delete_function",
      data: data,
      dataType: "text",
      success: function(resultData) {
          location.reload();
      }
});
});


$("button[name='btn_edit_function']").click(function() {

    window.location = "edit_function?function_name="+$(this).data('function_name');

});


$("button[name='btn_new_testcase']").click(function() {

    window.location = "new_testcase/"+$(this).data('function_name');

});

