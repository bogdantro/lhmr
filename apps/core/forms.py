from django import forms
from multiselectfield import MultiSelectField

class ContactForm(forms.Form):
    fra_epost = forms.CharField(required=True)
    navn = forms.CharField(required=True)
    beskjed = forms.CharField(widget=forms.Textarea, required=True)


class Order(forms.Form):
    OPTIONS = (
        ("ecommerce", "Ecommerce"),
        ("blog", "Blog"),
        ("portofolio", "Portofolio"),
        ("personal", "Personal"),
        ("business", "Business"),
        )
    product = MultiSelectField(choices=OPTIONS)