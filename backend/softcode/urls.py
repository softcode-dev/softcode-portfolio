from django.urls import path

from orders.views import health, home, order


urlpatterns = [
    path("", home),
    path("api/health", health),
    path("api/order", order),
]
