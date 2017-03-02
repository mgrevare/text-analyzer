$( document ).ready(function() {

  function formSubmission() {
    $('.js-text-form').submit(function(event) {
      event.preventDefault();
      var userText = $('#user-text').val();
      var standardText =  standardizeWords(userText);
      var distinctWords = doUniqueWordCount(standardText);
      var wordCount = doWordCount(standardText);
      var averageWordLength = doWordLength(standardText);
      $('.text-report').removeClass('hidden');
      var textReport = $('.js-text-report');
      textReport.find('.js-word-count').text(wordCount);
      textReport.find('.js-unique-word-count').text(distinctWords);
      textReport.find('.js-average-word-length').text(
        averageWordLength + " characters");      })
    };

    function standardizeWords(text) {
    return text.toLowerCase().match(/\b[^\s]+\b/g).sort();

  };

    function doWordCount(text) {
      return text.length;
    };

    function doUniqueWordCount(text) {
      var uniqueWords = [];
      text.forEach(function(item){
        if (uniqueWords.indexOf(item) === -1) {
    uniqueWords.push(item);
  }
      });
      return uniqueWords.length;
    }

    function doWordLength(text) {
      var totalCharacter = text.join("").length;
      return (totalCharacter / text.length);
    }


    $(formSubmission);
    });
