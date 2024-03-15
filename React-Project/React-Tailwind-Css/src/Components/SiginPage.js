import React from 'react'

function SiginPage() {
  return (
   <div>
  <div className='h-80 w-80 bg-red-200 text-lime-400 mt-5 ms-4 hover:rotate-45 hover:translate-y-32'>Anil</div>
  <table class="border-separate border border-slate-400 p-5 ...">
  <thead>
    <tr>
      <th class="border border-slate-300 p-5 ...">State</th>
      <th class="border border-slate-300 ...">City</th>
    </tr>
  </thead>
  <tbody>
    <tr >
      <td class="border border-slate-300 ...">Indiana</td>
      <td class="border border-slate-300 ...">Indianapolis</td>
    </tr>
    <tr>
      <td class="border border-slate-300 ...">Ohio</td>
      <td class="border border-slate-300 ...">Columbus</td>
    </tr>
    <tr>
      <td class="border border-slate-300 ...">Michigan</td>
      <td class="border border-slate-300 ...">Detroit</td>
    </tr>
  </tbody>
</table>

  </div>
  )
}

export default SiginPage