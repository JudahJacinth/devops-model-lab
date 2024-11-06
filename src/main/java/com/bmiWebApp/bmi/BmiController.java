package com.bmiWebApp.bmi;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model; import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class BmiController {

    @GetMapping("/")
    public String showForm() {
        return "bmiForm";
    }

    @PostMapping("/calculate")
    public String calculateBMI(@RequestParam("weight") double weight, @RequestParam("height") double height, Model model) {
        double bmi = weight / (height * height);
        model.addAttribute("bmi", bmi);
        return "bmiResult"; }
}
