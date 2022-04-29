<script>
    export let data = ''
    export let viewBox = extractViewBox(data)
    
    export let size = '20px'
    export let width = size
    export let height = size
    export let color = 'currentColor'
    export let stroke = color
    export let fill = color
    $: elements = data
      .replace(/<svg ([^>]*)>/, '')
      .replace('</svg>', '')
    function extractViewBox(svg) {
      const regex = /viewBox="([\d\- \.]+)"/
      const res = regex.exec(svg)
      if (!res) return '0 0 20 20' // default value
      return res[1]
    }
  </script>
  
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {width}
    {height}
    {viewBox}
    {stroke}
    {fill}
    {...$$restProps}
  >
    {@html elements}
  </svg>