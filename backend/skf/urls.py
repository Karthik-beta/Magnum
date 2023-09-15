from django.urls import re_path, path
from skf import views

from skf.views import (BreakdownCategoryListCreateView,
                       BreakdownCategoryRetrieveUpdateDestroyView,
                       ShiftListCreateView, CompanyListCreateView, LocationListCreateView,
                       ShopfloorListCreateView, AssemblylineListCreateView, MachineListCreateView)


urlpatterns = [

    re_path(r'^breakdown_category/$', BreakdownCategoryListCreateView.as_view()),
    re_path(r'^breakdown_category/(?P<breakdownCategoryId>\d+)/?$', BreakdownCategoryRetrieveUpdateDestroyView.as_view()),

    re_path(r'^shift/$', ShiftListCreateView.as_view()),

    re_path(r'^company/$', CompanyListCreateView.as_view()),

    re_path(r'^location/$', LocationListCreateView.as_view()),

    re_path(r'^shopfloor/$', ShopfloorListCreateView.as_view()),

    re_path(r'^assemblyline/$', AssemblylineListCreateView.as_view()),

    re_path(r'^machine/$', MachineListCreateView.as_view()),

    re_path(r'^andon/$', views.andonapi),  
    re_path(r'^andon/([0-9]+)$', views.andonapi),

]