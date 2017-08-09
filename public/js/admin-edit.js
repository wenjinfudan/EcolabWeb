/**
 * Created by wenja on 2017/7/4.
 */

$(document).ready(function () {
    let url = window.location.href;
    let paramArray = url.split('/');
    let length = paramArray.length;
    let tableName = paramArray[length - 1];

    let recordList = $('.' + tableName + '-Delete');
    for (let i = 0; i < recordList.length; i++) {
        $('#delete-' + recordList[i].value).click(function () {
            // post to server
            $.post('/delete/' + tableName + '/' + recordList[i].value).then(status => {
                if (status === 'success') {
                    window.location.href = 'http://cnshafinaap01p:2017/admin/' + tableName;
                }
            });
        });
    }
    for (let i = 0; i < recordList.length; i++) {
        $('#update-' + recordList[i].value).click(function () {
            // post to server
            let updateMessage = {};
            updateMessage.ID = Number(recordList[i].value);
            updateMessage.Detail = $('#input-' + recordList[i].value).val();

            $.ajax({
                type: 'POST',
                url: '/update/' + tableName,
                data: JSON.stringify(updateMessage),
                contentType: 'application/json',
                dataType: 'json',
                timeout: 10000,
                success: function (result) {
                    console.log(result.status);
                    if (result.status === 'success') {
                        window.location.href = 'http://cnshafinaap01p:2017/admin/' + tableName;
                    }
                },
                error: function (xhr, type, errerThrown) {
                    console.log(errerThrown);
                }
            });
        });
    }

    $('#' + tableName + '-Insert').click(function () {
        if ($('#new-button').length !== 0) {
            alert('You can\'t add two value once!');
        } else {
            $('#content-container').append(`
                                <tr>
                            <td>Generated by system.</td>
                            <td>Generated by system.</td>
                            <td><input type="text" placeholder="You can input new value" id="new-value"/></td>
                            <td><button class=" btn btn-primary" id="new-button">Commit</button></td>
                            <td></td>
                        </tr>
            `);
            $('#new-button').click(function () {
                // alert($('#new-value').val());
                let insertMessage = {};
                insertMessage.Detail = $('#new-value').val();
                $.ajax({
                    type: 'POST',
                    url: '/insert/' + tableName,
                    data: JSON.stringify(insertMessage),
                    contentType: 'application/json',
                    dataType: 'json',
                    timeout: 10000,
                    success: function (result) {
                        console.log(result.status);
                        if (result.status === 'success') {
                            window.location.href = 'http://cnshafinaap01p:2017/admin/' + tableName;
                        }
                    },
                    error: function (xhr, type, errerThrown) {
                        console.log(errerThrown);
                    }
                });
            });
        }
    });
});