class Github {

    constructor() {
        this.client_id = 'f0894795f6bb860cde6a';
        this.client_secret = ''; // Insert SECRET
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

  async getUser(user){
      const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

      const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

      const profile = await profileResponse.json();
      const repos =  await repoResponse.json();

    //   returning object since we will also return repos from here
      
    return {
        //   profile: profileData;
        // profile: profile;
        profile,
        repos
      }
  }  
     
}