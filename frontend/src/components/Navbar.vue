<template>
    <nav class="navbar">
        <div>
            <a href="/"><img src="@/assets/logo.png" alt="Logo" width="350" height="auto"></a>
        </div>
        <div class="navbar-links flex items-center gap-6">
            <a href="/about" class="rounded-full px-4 py-2 font-semibold text-xs text-white uppercase tracking-widest hover:bg-purple-800">About Us</a>
            <a href="/login" class="rounded-full px-4 py-2 font-semibold text-xs text-white uppercase tracking-widest hover:bg-purple-800" >Login</a>
            <a href="/register" class="inline-flex items-center px-4 py-2 bg-purple-800 border border-transparent rounded-full font-semibold text-xs text-white uppercase tracking-widest hover:bg-purple-700 focus:bg-purple-700 active:bg-purple-700  focus:ring-offset-2 transition ease-in-out duration-150">Sign Up</a>
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
