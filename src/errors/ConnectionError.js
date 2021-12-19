import Swal from 'sweetalert2';

export default function ConnectionError() {
  return Swal.fire({
    icon: 'error',
    title: 'Opa...',
    text: 'Algo deu errado! Por favor, tente novamente mais tarde!',
  });
}
