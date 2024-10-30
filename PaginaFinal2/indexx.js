function loadProfilePicture(event) {
    const profilePic = document.getElementById('profile-pic');
    profilePic.src = URL.createObjectURL(event.target.files[0]);
}
