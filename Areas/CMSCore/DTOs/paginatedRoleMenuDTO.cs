﻿using FiyiStore.Areas.CMSCore.Entities;

namespace FiyiStore.Areas.CMSCore.DTOs
{
    public class paginatedRoleMenuDTO
    {
        public List<RoleMenu?> lstRoleMenu { get; set; }
        public int TotalItems { get; set; }
        public int PageIndex { get; set; }
        public int PageSize { get; set; }

        public int TotalPages => (int)Math.Ceiling(TotalItems / (double)PageSize);

        public bool HasPreviousPage => PageIndex > 1;

        public bool HasNextPage => PageIndex < TotalPages;
    }
}
