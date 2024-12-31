<script>
    import { goto } from '$app/navigation';
    export let gamemode = 'mode2';
  
    // 根據 gamemode 跳轉到對應路徑
    $: {
      if (gamemode === 'default') {
        goto('/game/default');
      } else if (gamemode === 'mode2') {
        goto('/game/mode2');
      }
    }
  </script>
  
  <p>Redirecting...</p>