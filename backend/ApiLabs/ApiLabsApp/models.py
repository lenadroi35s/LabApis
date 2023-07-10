from django.db import models

class SangreData(models.Model):
    azucar_porcentaje = models.FloatField()
    grasa_porcentaje = models.FloatField()
    oxygen_porcentaje = models.FloatField()
    nivel_riesgo = models.CharField(max_length=10, blank=True)

    def save(self, *args, **kwargs):
        # Calcular el nivel de riesgo basado en los porcentajes
        if self.azucar_porcentaje > 70 and self.grasa_porcentaje > 88.5 and self.oxygen_porcentaje < 60:
            self.nivel_riesgo = 'ALTO'
        elif 50 <= self.azucar_porcentaje <= 70 and 62.2 <= self.grasa_porcentaje <= 88.5 and 60 <= self.oxygen_porcentaje <= 70:
            self.nivel_riesgo = 'MEDIO'
        elif self.azucar_porcentaje < 50 and self.grasa_porcentaje < 62.2 and self.oxygen_porcentaje > 70:
            self.nivel_riesgo = 'BAJO'
        else:
            self.nivel_riesgo = ''

        super().save(*args, **kwargs)

    def __str__(self):
        return f'ID: {self.id}, Riesgo: {self.nivel_riesgo}'
