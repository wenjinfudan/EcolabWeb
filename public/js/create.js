/**
 * Created by wenja on 2017/6/26.
 */
$(document).ready(function () {

    // let username;
    // $.post('/username').then(name => {
    //     username = name;
    //     $('#username').html(username);
    // });
    $('#CompetitorCNOptions').bind("click", function(){
        let CompetitorCNID = Number($('#CompetitorCNOptions').val());
        if (CompetitorCNID > 0) {
            $('#CompetitorCNInput').val($('#CompetitorCN-' + CompetitorCNID).html());

        } else {
            $('#CompetitorCNInput').val('');
        }
    });

    // // observe EstimatedPCO <=100%
    $('#EstimatedPCOInput').on("input propertychange", function () {
        if( $('#EstimatedPCOInput').val().slice(0, 3) === 100) {
            $('#EstimatedPCOInput').val( $('#EstimatedPCOInput').val().slice(0, 3));
        } else {
            $('#EstimatedPCOInput').val( $('#EstimatedPCOInput').val().slice(0, 2));
        }
    });

    //
    //
    $('#new-button').click(function () {
        let newMessage = {};

        newMessage.ReviewerID = Number($('#ReviewerInput').val());
        newMessage.BUDistrictID = Number($('#BUDistrictInput').val());
        newMessage.Province = $('#ProvinceInput').val();
        newMessage.City = $('#CityInput').val();
        newMessage.Site = $('#SiteInput').val();
        newMessage.ChineseName = $('#ChineseNameInput').val();
        newMessage.EnglishName = $('#EnglishNameInput').val();
        newMessage.PipelineStatusID = Number($('#PipelineStatusInput').val());
        newMessage.ContractTermID = Number($('#ContractTermInput').val());
        newMessage.TargetRateID = Number($('#TargetRateInput').val());
        newMessage.AnnualSales = Number($('#AnnualSalesInput').val());
        newMessage.CorporateAccountChinese = $('#CorporateAccountChineseInput').val();
        newMessage.CorporateAccountEnglish = $('#CorporateAccountEnglishInput').val();
        newMessage.SalesRep = $('#SalesRepInput').val();
        newMessage.AssistCAMNameID = Number($('#AssistCAMNameInput').val());
        newMessage.FollowingStatusID = Number($('#FollowingStatusInput').val());
        newMessage.CTCBUID = Number($('#CTCBUInput').val());
        newMessage.CTCSales = $('#CTCSalesInput').val();
        newMessage.SalesTypeID = Number($('#SalesTypeInput').val());
        newMessage.FollowingStatusRemark = $('#FollowingStatusRemarkInput').val();
        newMessage.CompetitorCN = $('#CompetitorCNInput').val();
        newMessage.FirstCollaborationDate = $('#FirstCollaborationDateInput').val();
        newMessage.EstimatedPCO = Number($('#EstimatedPCOInput').val());
        newMessage.Remark = $('#RemarkInput').val();
        newMessage.MarketClassificationID = Number($('#MarketClassificationInput').val());

        if (newMessage.Province === '') {
            alert('Please input Province');
            return;
        }
        if (newMessage.City === '') {
            alert('Please input City');
            return;
        }
        if (newMessage.Site === '') {
            alert('Please input Site');
            return;
        }
        if (newMessage.ChineseName === '') {
            alert('Please input CineseName');
            return;
        }
        if (newMessage.EnglishName === '') {
            alert('Please input EnglishName');
            return;
        }
        if (newMessage.AnnualSales === 0) {
            alert('Please input AnnualSales');
            return;
        }
        if (newMessage.SalesRep === '') {
            alert('Please input SalesRep');
            return;
        }
        if (newMessage.CompetitorCN === '') {
            alert('Please input CompetitorCN');
            return;
        }
        if (newMessage.EstimatedPCO === 0) {
            alert('Please input EstimatedPCO');
            return;
        }

        if (newMessage.FirstCollaborationDate === '') {
            newMessage.FirstCollaborationDate = null;
        }
        console.log(JSON.stringify(newMessage));
        $.post('/create?mainData=' + JSON.stringify(newMessage)).then(mainData => {
            console.log(mainData);
            if (!isNaN(mainData.ID)) {
                // console.log(status);
                window.location.href = 'http://localhost:2017/detail/' + mainData.ID;
            }
        });
    });

    $('#back-button').click(function () {
        window.location.href = 'http://localhost:2017/index';
    });

    // $.post('/metaData').then(metaData => {
    //     metaData.ReviewerArray.forEach(function (reviewer) {
    //         $('#ReviewerInput').append(`<option value="` + reviewer.ID + `">` + reviewer.Name + `</option>`);
    //     });
    //     metaData.BUDistrictArray.forEach(function (BUDistrict) {
    //         $('#BUDistrictInput').append(`<option value="` + BUDistrict.ID + `">` + BUDistrict.Name + `</option>`);
    //     });
    //     metaData.PipelineStatusArray.forEach(function (PipelineStatus) {
    //         $('#PipelineStatusInput').append(`<option value="` + PipelineStatus.ID + `">` + PipelineStatus.Detail + `</option>`);
    //     });
    //     metaData.ContractTermArray.forEach(function (ContractTerm) {
    //         $('#ContractTermInput').append(`<option value="` + ContractTerm.ID + `">` + ContractTerm.Detail + `</option>`);
    //     });
    //     metaData.TargetRateArray.forEach(function (TargetRate) {
    //         $('#TargetRateInput').append(`<option value="` + TargetRate.ID + `">` + TargetRate.Detail + `</option>`);
    //     });
    //     metaData.AssistCAMNameArray.forEach(function (AssistCAMName) {
    //         $('#AssistCAMNameInput').append(`<option value="` + AssistCAMName.ID + `">` + AssistCAMName.Detail + `</option>`);
    //     });
    //     metaData.FollowingStatusArray.forEach(function (FollowingStatus) {
    //         $('#FollowingStatusInput').append(`<option value="` + FollowingStatus.ID + `">` + FollowingStatus.Detail + `</option>`);
    //     });
    //     metaData.CTCBUArray.forEach(function (CTCBU) {
    //         $('#CTCBUInput').append(`<option value="` + CTCBU.ID + `">` + CTCBU.Name + `</option>`);
    //     });
    //     metaData.SalesTypeArray.forEach(function (SalesType) {
    //         $('#SalesTypeInput').append(`<option value="` + SalesType.ID + `">` + SalesType.Name + `</option>`);
    //     });
    //     metaData.CompetitorCNArray.forEach(function (CompetitorCN) {
    //         $('#CompetitorCNOptions').append(`<option value="` + CompetitorCN.ID + `">` + CompetitorCN.Name + `</option>`);
    //     });
    //     metaData.MarketClassificationArray.forEach(function (MarketClassification) {
    //         $('#MarketClassificationInput').append(`<option value="` + MarketClassification.ID + `">` + MarketClassification.Name + `</option>`);
    //     });
    //     $('#OpportunityCodeOutput').append('Generated By System.');
    //
    //
    //
    // });



});