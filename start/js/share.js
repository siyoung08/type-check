const url = 'https://type4.netlify.app';

function kakaoShare(){
    Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
        title: shareTitle,
        description: shareDes,
        imageUrl: shareImage,
        link: {
            mobileWebUrl: shareURL,
            webUrl: shareURL,
        },
        },
        social: {
        likeCount: 10,
        commentCount: 20,
        sharedCount: 30,
        },
        buttons: [
        {
            title: '결과 확인하기',
            link: {
            mobileWebUrl: shareURL,
            webURL: shareURL
            },
        },
        ]
    });
}