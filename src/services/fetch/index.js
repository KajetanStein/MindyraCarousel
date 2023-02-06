class GithubFetcher {
    constructor (githubUrl) {
        this.githubUrl = githubUrl;
    }
    async fetch(url, method='GET', parse) {
        return await fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json'
                },
        }).then(async res => {
            if (res.status < 200 || res.status >= 300) {
                return new Error('Something went wrong');
            }

            return parse && await parse(res);
        }).catch(err => err)
    };

    async getGithubProfielPicture(userName) {
        const user = await this.fetch(
            `${this.githubUrl}/users/${userName}`,
            'GET',
            async (res) => await res.json()
        )

        return user.avatar_url
    }
}

export const githubFetcher=new GithubFetcher('https://api.github.com');