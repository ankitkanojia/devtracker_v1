﻿using System;
using System.Collections.Generic;
using System.Web;

namespace Repository.Models.ViewModels
{
    public class ProjectsVm
    {
        public long ProjectId { get; set; }
        public string TagLine { get; set; }
        public string Name { get; set; }
        public string ClientName { get; set; }
        public DateTime StartDate { get; set; }
        public string StartDateString { get; set; }
        public DateTime? EndDate { get; set; }
        public string EndDateString { get; set; }
        public string BasicDescription { get; set; }
        public string ConfidentialDescription { get; set; }
        public int? TeamMemberCount { get; set; }
        public int? ActualTeamMemberCount { get; set; }
        public long? ProjectStatusMasterId { get; set; }
        public string LiveURL { get; set; }
        public string StagingURL { get; set; }
        public long ProjectCategoryId { get; set; }
        public bool IsActive { get; set; }
        public bool IsDelete { get; set; }
        public DateTime CreatedDate { get; set; }
        public HttpPostedFileBase[] AttachedFiles { get; set; }
        public int? EstimateHours { get; set; }
        public decimal? Budget { get; set; }
        public string[] AssignyList { get; set; }
    }

    public class ProjectsListVm
    {
        public long ProjectId { get; set; }
        public string TagLine { get; set; }
        public string Name { get; set; }
        public string ClientName { get; set; }
        public DateTime StartDate { get; set; }
        public string StartDateString { get; set; }
        public DateTime? EndDate { get; set; }
        public string EndDateString { get; set; }
        public string BasicDescription { get; set; }
        public string ConfidentialDescription { get; set; }
        public int? TeamMemberCount { get; set; }
        public int? ActualTeamMemberCount { get; set; }
        public long? ProjectStatusMasterId { get; set; }
        public string LiveURL { get; set; }
        public string StagingURL { get; set; }
        public long ProjectCategoryId { get; set; }
        public bool IsActive { get; set; }
        public bool IsDelete { get; set; }
        public DateTime CreatedDate { get; set; }
        public HttpPostedFileBase[] AttachedFiles { get; set; }
        public int? EstimateHours { get; set; }
        public decimal? Budget { get; set; }
        public string[] AssignyList { get; set; }
        public ICollection<ProjectAssigny> ProjectAssignyAssignies { get; set; }
        public ICollection<ProjectAttachment> ProjectAttachments { get; set; }
    }
}