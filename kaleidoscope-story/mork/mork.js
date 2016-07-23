module.exports = {
  rules: [
    {
      pattern: /\/api\/gethomeStory.php\?rtype=origin$/,
      respondwith: './homeStory.json'
    },
    {
      pattern: /\/api\/gethomeStory.php\?rtype=more$/,
      respondwith: './ifyChildym.json'
    },
    {
      pattern: /\/api\/gethomeSong.php\?rtype=refresh$/,
      respondwith: './homeSong.json'
    },
    {
      pattern: /\/api\/gethomeVideo.php\?rtype=animate$/,
      respondwith: './homeVideo.json'
    },
    {
      pattern: /\/api\/gethomeBook.php\?rtype=book$/,
      respondwith: './homeBook.json'
    },
    {
      pattern: /\/api\/getclassifyStory.php\?rtype=ifystory$/,
      respondwith: './classifyStory.json'
    },
    {
      pattern: /\/api\/gethomeStoryContent.php\?id=\d+$/,
      respondwith: './homeStoryContent.json'
    }
    
  ]
};
