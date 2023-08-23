<template>
    <nav class="navbar">
        <div>
            <a href="/"><img src="/images/logo.png" alt="Logo" class="w-100"></a>
        </div>
        <div class="navbar-links flex items-center gap-6">
            <a href="/about" class="rounded-full px-4 py-2 text-white text-xl hover:bg-purple-800">About Us</a>
            <a href="/login" class="rounded-full px-4 py-2 text-white text-xl hover:bg-purple-800" >Login</a>
            <a href="/register" class="border-2 border-black border-opacity-50 rounded-full bg-purple-900 px-4 py-2 text-white text-xl hover:bg-purple-800 ">Sign Up</a>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  color: #FFFAFE;
  position: sticky;
}

.navbar-links a {
  color: white;
  text-decoration: none;
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3); 
}
</style>
