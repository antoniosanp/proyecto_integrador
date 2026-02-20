export function RegisterForm() {
    return `<form class="max-w-md mx-auto bg-white min-h-screen p-6">

  <!-- Header -->
  <div class="flex items-center gap-4 mb-6">
    <button class="text-gray-600 text-xl">←</button>
    <h1 class="font-semibold text-lg">Registration</h1>
  </div>

  <!-- Progress -->
  <div class="flex justify-center gap-2 mb-6">
    <div class="w-8 h-2 bg-indigo-500 rounded-full"></div>
    <div class="w-2 h-2 bg-gray-300 rounded-full"></div>
    <div class="w-2 h-2 bg-gray-300 rounded-full"></div>
  </div>

  <!-- Title -->
  <h2 class="text-2xl font-bold mb-1">Create your account</h2>
  <p class="text-gray-500 text-sm mb-6">
    Enter your details to get started with Lift Bunn.
  </p>

  <!-- Full Name -->
  <div class="mb-4">
    <label for="full_name" class="block text-sm font-medium mb-2">Full Name</label>
    <input type="text" name="full_name"
      placeholder="John Doe"
      class="w-full border rounded-xl px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
  </div>

  <!-- Email -->
  <div class="mb-4">
    <label class="block text-sm font-medium mb-2">Email Address</label>
    <input type="email"
      placeholder="john@example.com"
      class="w-full border rounded-xl px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
  </div>

  <!-- Phone -->
  <div class="mb-6">
    <label class="block text-sm font-medium mb-2">Phone Number</label>
    <div class="flex gap-2">
      <input type="text"
        value="+251"
        class="w-20 border rounded-xl px-3 py-3 bg-gray-50 focus:outline-none"/>
      <input type="text"
        placeholder="912 345 678"
        class="flex-1 border rounded-xl px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
    </div>
  </div>

  <!-- Role -->
  <h3 class="font-semibold mb-3">Choose your role</h3>
  <div class="grid grid-cols-2 gap-4 mb-6">

    <!-- Passenger -->
    <label class="cursor-pointer">
    <input 
      type="radio" 
      name="role" 
      value="passenger" 
      class="peer hidden"
    />
        <div class="choose-role relative border rounded-2xl p-4 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-indigo-500 transition">
        <div class="w-10 h-10 flex items-center justify-center bg-indigo-100 rounded-full text-indigo-600">
            👤
        </div>
        <span class="text-sm font-medium">Passenger</span>
        <span class="check hidden absolute top-2 right-2 w-5 h-5 bg-indigo-500 text-white text-xs rounded-full flex items-center justify-center">
            ✓
        </span>
        </div>
    </label>

    <!-- Driver (Selected) -->
    <label class="cursor-pointer">
    <input 
      type="radio" 
      name="role" 
      value="driver" 
      class="peer hidden"
    />
    <div class="choose-role relative border rounded-2xl p-4 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-indigo-500 transition">
      <div class="w-10 h-10 flex items-center justify-center bg-indigo-500 rounded-full text-white">
        🚗
      </div>
      <span class="text-sm font-medium text-indigo-600">Driver</span>
      <span class="check hidden absolute top-2 right-2 w-5 h-5 bg-indigo-500 text-white text-xs rounded-full flex items-center justify-center">
        ✓
      </span>
    </div>
    </label>

  </div>

  <!-- Vehicle Type -->
  <h3 class="font-semibold mb-3">Select Vehicle Type</h3>
  <div class="flex gap-4 mb-6">

    <button type="button" class="flex-1 border rounded-xl py-3 flex items-center justify-center gap-2 text-gray-600 hover:cursor-pointer">
      🚗 Car
    </button>

    <button type="button" class="flex-1 border rounded-xl py-3 flex items-center justify-center gap-2 text-gray-600 hover:cursor-pointer">
      🏍 Motorcycle
    </button>
  </div>

  <!-- Location -->
  <h3 class="font-semibold mb-3">Set your location</h3>

  <div class="border rounded-xl px-4 py-3 flex items-center gap-2 mb-4 bg-gray-50">
    <span class="text-indigo-600">📍</span>
    <span class="text-sm">Bole District, Addis Ababa</span>
  </div>

  <div class="relative mb-6">
    <div class="w-full h-40 bg-gray-200 rounded-2xl flex items-center justify-center">
      🗺 Map Preview
    </div>
    <button class="absolute bottom-3 right-3 bg-white shadow-md rounded-full p-2">
      ⚙
    </button>
  </div>

  <!-- Button -->
  <button type="submit" class="w-full bg-indigo-600 text-white py-4 rounded-2xl font-semibold shadow-lg hover:bg-indigo-700 transition">
    Complete Registration
  </button>

  <!-- Terms -->
  <p class="text-xs text-gray-400 text-center mt-4">
    By clicking "Complete Registration", you agree to Lift Bunn's
    <span class="text-indigo-600 cursor-pointer">Terms of Service</span> and
    <span class="text-indigo-600 cursor-pointer">Privacy Policy</span>.
  </p>

</form>`
}

document.addEventListener('click', (e) => {
    /* Submit button */
    if (e.target.type == 'submit') {
        e.preventDefault()
        /* Get form */
        const form = e.target.closest('form')
        console.log(form);
        /* Get data from form */
        const data = new FormData(form);
        console.log(Object.fromEntries(data.entries()));

    }

    /* Vehicle type buttons */
    if (e.target.type == 'button') {
        const cont = e.target.closest('.flex.gap-4.mb-6')
        e.target.classList.add('active-btn')
        if (cont) {
            const btn = cont.querySelectorAll('button')
            btn.forEach(button => {
                if (button !== e.target) {
                    button.classList.remove('active-btn')
                }
            })
        }
    }

    /* Role buttons */
    if (e.target.classList.contains('choose-role')) {
        const cont = e.target.closest('.grid.grid-cols-2.gap-4.mb-6')
        e.target.classList.add('active-btn')
        if (cont) {
            const divs = cont.querySelectorAll('.choose-role')
            divs.forEach(div => {
                if (div !== e.target) {
                    div.classList.remove('active-btn')
                }
            })
            e.target.querySelector('.check').classList.remove('hidden')
            const spans = cont.querySelectorAll('.check')
            spans.forEach(span => {
                if (span !== e.target.querySelector('.check')) {
                    span.classList.add('hidden')
                }
            })
        }
    }
})
