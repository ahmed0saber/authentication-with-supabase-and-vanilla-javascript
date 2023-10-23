const logoutUser = () => {
    supabaseClient.auth
    .signOut()
    .then(() => {
        removeCookie("access_token")
        alert('Logout successful')
        window.location = "/login/"
    })
    .catch((err) => {
        alert(err.response.text)
    })
}

const displayUserDetails = async () => {
    const user = await getCurrentUser()
    document.querySelector(".user-email").textContent = user.email
}

const initProfilePage = () => {
    requireAuthentication()
    displayUserDetails()

    document.querySelector(".logout-btn").addEventListener("click", logoutUser)
}
initProfilePage()
