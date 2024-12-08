from django import forms
from .models import UserRecord
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

class UserForms(UserCreationForm):
    class Meta:
        model = User
        fields = ['first_name','last_name','username', 'email', 'password1','password2']
        widgets = {
            'first_name': forms.TextInput(attrs={'placeholder': 'firstname', 'class': 'input'}),
            'last_name': forms.TextInput(attrs={'placeholder': 'lastname', 'class': 'input'}),
            'username': forms.TextInput(attrs={'placeholder': 'username', 'class': 'input'}),
            'email': forms.TextInput(attrs={'placeholder': 'email', 'class': 'input'}),
            'password1': forms.PasswordInput(attrs={'placeholder': 'password', 'class': 'input'}),
            'password2': forms.PasswordInput(attrs={'placeholder': 'confirm password', 'class': 'input'}),
        }

    def __init__(self, *args, **kwargs):
        super(UserForms,self).__init__(*args, **kwargs)
        self.fields['first_name'].widget.attrs['class'] = 'input'
        self.fields['first_name'].widget.attrs['placeholder'] = 'firstname'
        self.fields['first_name'].label = ''
        self.fields['last_name'].widget.attrs['class'] = 'input'
        self.fields['last_name'].widget.attrs['placeholder'] = 'lastname'
        self.fields['last_name'].label = ''
        self.fields['email'].widget.attrs['class'] = 'input'
        self.fields['email'].widget.attrs['placeholder'] = 'email'
        self.fields['email'].label = ''
        self.fields['username'].widget.attrs['class'] = 'input'
        self.fields['username'].widget.attrs['placeholder'] = 'username'
        self.fields['username'].label = ''
        self.fields['username'].help_text = '<span class="form-text text-muted"><small>Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.</small></span>'

        self.fields['password1'].widget.attrs['class'] = 'input'
        self.fields['password1'].widget.attrs['placeholder'] = 'Password'
        self.fields['password1'].label = ''
        self.fields['password1'].help_text = '<ul class="form-text text-muted small"><li>Your password can\'t be too similar to your other personal information.</li><li>Your password must contain at least 8 characters.</li><li>Your password can\'t be a commonly used password.</li><li>Your password can\'t be entirely numeric.</li></ul>'

        self.fields['password2'].widget.attrs['class'] = 'input'
        self.fields['password2'].widget.attrs['placeholder'] = 'Confirm Password'
        self.fields['password2'].label = ''
        self.fields['password2'].help_text = '<span class="form-text text-muted"><small>Enter the same password as before, for verification.</small></span>'
