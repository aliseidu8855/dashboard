from django.shortcuts import render, redirect
from django.contrib.auth import authenticate,login,logout
from .forms import UserForms
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

def user_logout(request):
    logout(request)
    return redirect("home")

def user_register(request):
    if request.method == "POST":
        form = UserForms(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password1')
            user = authenticate(request, username=username, password=password)
            login(request, user)
            messages.success(request, "You have registered")
            return redirect("home")
    else:
        form = UserForms()
        return render(request, 'register.html', {"form": form})
    return render(request, "register.html", {"form": form})

#def dashboard(request):
#    return render(request, "dashboard.html")

#def messages(request):
#    return render(request, "messages.html")

#def settings(request):
#    return render(request, "settings.html")
