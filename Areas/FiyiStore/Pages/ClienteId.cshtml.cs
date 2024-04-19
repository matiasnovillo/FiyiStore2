using FiyiStore.Areas.CMSCore.Entities;
using FiyiStore.Areas.CMSCore.Interfaces;
using FiyiStore.Areas.FiyiStore.Entities;
using FiyiStore.Areas.FiyiStore.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace FiyiStore.Areas.FiyiStore.Pages
{
    public class ClienteIdModel : PageModel
    {
        private readonly IClientRepository _clientRepository;
        private readonly IUserRepository _userRepository;
        private readonly IRoleRepository _roleRepository;
        private readonly IRoleMenuRepository _roleMenuRepository;
        [BindProperty]
        public Client Client { get; set; }

        public ClienteIdModel(IUserRepository userRepository,
            IRoleMenuRepository roleMenuRepository,
            IRoleRepository roleRepository,
            IClientRepository clientRepository)
        {
            _userRepository = userRepository;
            _roleRepository = roleRepository;
            _roleMenuRepository = roleMenuRepository;
            _clientRepository = clientRepository;
        }

        
        public void OnGet()
        {
            List<Role> lstRole = _roleRepository.GetAll();

            //TODO Seguir aca
        }
    }
}
