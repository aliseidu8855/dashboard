from django.shortcuts import render, redirect
from django.contrib.auth import authenticate,login,logout
from django.contrib import messages

def home(request):
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            messages.success(request, "You have been logged in!!")
            return redirect("home")

    return render(request, "home.html")

#def dashboard(request):
#    return render(request, "dashboard.html")

#def messages(request):
#    return render(request, "messages.html")

#def settings(request):
#    return render(request, "settings.html")
