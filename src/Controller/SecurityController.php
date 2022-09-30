<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class SecurityController extends AbstractController
{
    #[Route(path: '/login', name: 'app_login')]
    public function login(AuthenticationUtils $authenticationUtils): Response
    {

        if ($this->getUser()) {
            return $this->redirectToRoute('app_floating_roof_data');
        }

        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();
        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();

        return $this->render('security/newLoginForm.html.twig', ['last_username' => $lastUsername, 'error' => $error]);
    }

    #[Route(path: '/logout', name: 'app_logout')]
    public function logout(): void
    {
        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }

    public function index(Request $request, UserPasswordEncoderInterface $passwordEncoder): Response
    {
        if ($request->getMethod() === 'POST') {
            $email = $request->request->get('email');
            $password = $request->request->get('password');
            $user = $this->getDoctrine()->getRepository(User::class)->findOneBy(['email' => $email]);
            if ($user) {
                $isValid = $passwordEncoder->isPasswordValid($user, $password);
                if ($isValid) {
                    $this->addFlash('success', 'You are logged in!');
                    return $this->redirectToRoute('app_floating_roof_data');
                } else {
                    $this->addFlash('error', 'Invalid password!');
                    return $this->render('security/newLoginForm.html.twig');
                }
            } else {
                $this->addFlash('error', 'Invalid email!');
                return $this->render('security/newLoginForm.html.twig');
            }
        } else {
            return $this->render('security/newLoginForm.html.twig');
        }
    }
}
